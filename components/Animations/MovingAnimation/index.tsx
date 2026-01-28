'use client';

import { FC, ReactNode, useMemo } from 'react';
import { clsx } from 'clsx';
import { motion } from 'motion/react';

type Place = 'top' | 'bottom';
type Animate = { left?: number; top?: number; width?: number };

export type MovingAnimationProps = {
  place?: Place;
  centered?: boolean;
  widthAsElement?: boolean;
  elementRect: DOMRect | null;
  containerRect: DOMRect | null;
  className?: string;
  children?: ReactNode;
};

export const MovingAnimation: FC<MovingAnimationProps> = ({
  className,
  elementRect,
  place = 'top',
  containerRect,
  centered = false,
  widthAsElement = false,
  children,
}) => {
  const initial = useMemo(
    (): Animate =>
      computeAnimate({
        place,
        centered,
        elementRect,
        containerRect,
        widthAsElement,
      }),
    [containerRect, elementRect, widthAsElement, place, centered],
  );

  const animate = useMemo(
    (): Animate =>
      computeAnimate({
        place,
        centered,
        elementRect,
        containerRect,
        widthAsElement,
      }),
    [containerRect, elementRect, widthAsElement, place, centered],
  );

  if (!elementRect || !containerRect || !('left' in initial)) {
    return null;
  }

  return (
    <motion.div
      className={clsx(
        'absolute',
        className,
        place === 'top' && '-translate-y-full',
      )}
      initial={initial}
      animate={animate}
    >
      {children}
    </motion.div>
  );
};

type Args = Partial<
  Pick<
    MovingAnimationProps,
    'place' | 'centered' | 'elementRect' | 'containerRect' | 'widthAsElement'
  >
>;

const computeAnimate = ({
  place,
  centered,
  elementRect,
  containerRect,
  widthAsElement,
}: Args) => {
  const copy: Animate = {};

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
};
