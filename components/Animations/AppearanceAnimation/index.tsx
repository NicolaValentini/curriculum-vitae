'use client';

import { ComponentType, FC, ReactNode } from 'react';
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
  display?: string | undefined;
  className?: string | undefined;
  children?: ReactNode;
};

export const AppearanceAnimation: FC<AppearanceAnimationProps> = ({
  as = 'div',
  className,
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
              opacity: { duration: 0.3, delay: 0.1 },
              display: { duration: 0, delay: 0 },
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

type WithAppearanceAnimationProps<P> = P &
  Partial<Omit<AppearanceAnimationProps, 'className' | 'children'>> & {
    wrapperClassName?: string;
  };

export function withAppearanceAnimation<P extends object>(
  Component: ComponentType<P>,
) {
  const ComponentWithAppearanceAnimation = ({
    wrapperClassName,
    as,
    show,
    display,
    ...rest
  }: WithAppearanceAnimationProps<P>) => (
    <AppearanceAnimation
      as={as}
      show={show}
      display={display}
      className={wrapperClassName}
    >
      <Component {...(rest as P)} />
    </AppearanceAnimation>
  );

  ComponentWithAppearanceAnimation.displayName = `WithAppearanceAnimation(${
    Component.displayName || Component.name || 'Component'
  })`;

  return ComponentWithAppearanceAnimation;
}
