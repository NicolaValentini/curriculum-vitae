'use client';

import { FC, ReactNode, useLayoutEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const initial = { left: 0 };

type Props = {
  setWidth?: boolean;
  className?: string;
  elementRect: DOMRect | null;
  containerRect: DOMRect | null;
  children?: ReactNode;
};

export const MovingElement: FC<Props> = ({
  className,
  elementRect,
  containerRect,
  setWidth = false,
  children,
}) => {
  const [animate, setAnimate] = useState<{ left: number; width?: number }>(
    initial,
  );

  useLayoutEffect(() => {
    setAnimate(prev => {
      const copy = { ...prev };

      copy.left = (elementRect?.left ?? 0) - (containerRect?.left ?? 0);

      if (setWidth) {
        copy.width = elementRect?.width ?? 0;
      }

      return copy;
    });
  }, [containerRect, elementRect, setWidth]);

  return (
    <AnimatePresence>
      <motion.div
        className={className}
        initial={initial}
        animate={animate}
        exit={initial}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
