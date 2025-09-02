import { ComponentType } from 'react';
import { EntryAnimation, EntryAnimationProps } from '@/components';

export * from './EntryAnimation';

type Props<P> = P &
  Partial<Omit<EntryAnimationProps, 'className' | 'children'>> & {
    animationClassName?: string;
  };

export function withEntryAnimation<P extends object>(
  Component: ComponentType<P>,
) {
  const WithEntryAnimation = ({
    animationClassName,
    repeat,
    delay,
    entry,
    exit,
    ...rest
  }: Props<P>) => (
    <EntryAnimation
      repeat={repeat}
      delay={delay}
      entry={entry}
      exit={exit}
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
