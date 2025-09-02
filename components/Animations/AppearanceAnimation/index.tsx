'use client';

import { FC, ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const initial = {
  opacity: 0,
  display: 'none',
  transition: {
    opacity: { duration: 0.3, delay: 0 },
    display: { duration: 0, delay: 0.3 },
  },
};

export type AppearanceAnimationProps = {
  as?: 'div' | undefined;
  show?: boolean | undefined;
  delay?: number | undefined;
  display?: string | undefined;
  className?: string | undefined;
  children?: ReactNode;
};

export const AppearanceAnimation: FC<AppearanceAnimationProps> = ({
  as = 'div',
  delay = 0,
  className = '',
  show = false,
  display = 'block',
  children,
}) => {
  const Motion = motion[as];

  return (
    <AnimatePresence>
      {show && (
        <Motion
          className={className}
          initial={initial}
          animate={{
            opacity: 1,
            display,
            transition: {
              opacity: { duration: 0.3, delay: delay + 0.1 },
              display: { duration: 0, delay },
            },
          }}
          exit={initial}
        >
          {children}
        </Motion>
      )}
    </AnimatePresence>
  );
};
