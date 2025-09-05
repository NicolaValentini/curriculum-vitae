'use client';

import { FC, ReactNode, useLayoutEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

type Animate = { left: number; top?: number; width?: number };

const initialAnimate: Animate = { left: 0 };

export type Props = {
  place?: 'top' | 'bottom';
  centered?: boolean;
  className?: string;
  elementRect: DOMRect | null;
  containerRect: DOMRect | null;
  widthAsElement?: boolean;
  children?: ReactNode;
};

export const MovingElement: FC<Props> = ({
  place = 'top',
  centered,
  className,
  elementRect,
  containerRect,
  widthAsElement,
  children,
}) => {
  const [animate, setAnimate] = useState<Animate>(initialAnimate);

  useLayoutEffect(() => {
    setAnimate(prev => {
      const copy = { ...prev };

      copy.left = (elementRect?.left ?? 0) - (containerRect?.left ?? 0);

      if (centered) {
        copy.left += (elementRect?.width ?? 0) / 2;
      }

      if (widthAsElement) {
        copy.width = elementRect?.width ?? 0;
      }

      if (place === 'bottom') {
        copy.top =
          (elementRect?.top ?? 0) -
          (containerRect?.top ?? 0) +
          (elementRect?.height ?? 0);
      }

      return copy;
    });
  }, [containerRect, elementRect, widthAsElement, place, centered]);

  return (
    <AnimatePresence>
      <motion.div
        className={className}
        initial={initialAnimate}
        animate={animate}
        exit={initialAnimate}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
