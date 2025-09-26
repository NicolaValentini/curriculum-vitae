import { ComponentType } from 'react';

import { EntryAnimation, EntryAnimationProps } from '@/components';

export * from './EntryAnimation';

export type WithEntryAnimationProps<P> = P &
  Partial<Omit<EntryAnimationProps, 'className' | 'children'>> & {
    animationClassName?: string;
  };

export function withEntryAnimation<P extends object>(
  Component: ComponentType<P>,
) {
  const WithEntryAnimation = ({
    blur,
    ease,
    exit,
    delay,
    entry,
    repeat,
    distance,
    duration,
    animationClassName,
    ...rest
  }: WithEntryAnimationProps<P>) => (
    <EntryAnimation
      blur={blur}
      ease={ease}
      exit={exit}
      delay={delay}
      entry={entry}
      repeat={repeat}
      distance={distance}
      duration={duration}
      className={animationClassName}
    >
      <Component {...(rest as P)} />
    </EntryAnimation>
  );

  WithEntryAnimation.displayName = `WithEntryAnimation(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WithEntryAnimation;
}
