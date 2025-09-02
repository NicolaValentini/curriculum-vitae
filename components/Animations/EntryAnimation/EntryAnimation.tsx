'use client';

import { FC, ReactNode, useRef } from 'react';
import { AnimatePresence, motion, useInView } from 'motion/react';

const initials = {
  left: { x: -50 },
  right: { x: 50 },
  top: { y: -50 },
  bottom: { y: 50 },
};

const animations = {
  left: { x: 0 },
  right: { x: 0 },
  top: { y: 0 },
  bottom: { y: 0 },
};

export type EntryAnimationProps = {
  repeat?: boolean | undefined;
  delay?: number | undefined;
  entry?: keyof typeof initials | undefined;
  exit?: keyof typeof initials | undefined;
  className?: string | undefined;
  children?: ReactNode;
};

export const EntryAnimation: FC<EntryAnimationProps> = ({
  repeat = false,
  delay = 0,
  entry = 'left',
  exit: exitKey,
  className = '',
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: !repeat });

  const initial = { ...initials[entry], opacity: 0, filter: 'blur(4px)' };

  const animate = isInView
    ? { ...animations[entry], opacity: 1, filter: 'blur(0px)' }
    : initial;

  const exit = exitKey
    ? { exit: { ...initials[exitKey], opacity: 0, filter: 'blur(4px)' } }
    : undefined;

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        transition={{ duration: 1, delay }}
        initial={initial}
        animate={animate}
        {...exit}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
