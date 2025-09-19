'use client';

import { FC, ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';

type Props = {
  as?: 'div' | undefined;
  show?: boolean | undefined;
  delay?: number | undefined;
  className?: string | undefined;
  children: ReactNode;
};

export const AppearanceAnimation: FC<Props> = ({
  as = 'div',
  show = false,
  delay = 0,
  className,
  children,
}) => {
  const MotionComponent = motion[as];

  return (
    <AnimatePresence mode='wait'>
      {show && (
        <MotionComponent
          className={className}
          transition={{ delay }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </MotionComponent>
      )}
    </AnimatePresence>
  );
};
