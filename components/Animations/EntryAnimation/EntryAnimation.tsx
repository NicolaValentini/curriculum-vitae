'use client';

import { FC, ReactNode, useRef } from 'react';
import { motion, Transition, useInView, UseInViewOptions } from 'motion/react';

type Entry = 'left' | 'bottom' | 'top' | 'right';

const getInitial = (entry: Entry, distance: number, blur: number) => {
  const initials: Record<Entry, object> = {
    left: { x: -distance },
    right: { x: distance },
    top: { y: -distance },
    bottom: { y: distance },
  };

  return { ...initials[entry], opacity: 0, filter: `blur(${blur}px)` };
};

const getAnimate = (entry: Entry) => {
  const animates: Record<Entry, object> = {
    left: { x: 0 },
    right: { x: 0 },
    top: { y: 0 },
    bottom: { y: 0 },
  };

  return { ...animates[entry], opacity: 1, filter: 'blur(0px)' };
};

export type EntryAnimationProps = {
  exit?: Entry | undefined;
  blur?: number | undefined;
  entry?: Entry | undefined;
  distance?: number | undefined;
  ease?: Transition['ease'] | undefined;
  delay?: Transition['delay'] | undefined;
  repeat?: UseInViewOptions['once'] | undefined;
  duration?: Transition['duration'] | undefined;
  className?: string | undefined;
  children: ReactNode;
};

export const EntryAnimation: FC<EntryAnimationProps> = ({
  blur = 4,
  delay = 0,
  duration = 1,
  exit: exitKey,
  distance = 50,
  entry = 'left',
  repeat = false,
  ease = 'easeOut',
  children,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: !repeat });

  const transition = { duration, delay, ease };
  const initial = getInitial(entry, distance, blur);
  const animate = isInView ? getAnimate(entry) : initial;
  const exit = exitKey ? getInitial(exitKey, distance, blur) : undefined;

  return (
    <motion.div
      ref={ref}
      transition={transition}
      initial={initial}
      animate={animate}
      {...exit}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
