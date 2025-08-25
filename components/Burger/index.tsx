'use client';

import { FC, RefObject } from 'react';
import { motion } from 'motion/react';

const burger = 'w-full h-[0.2rem] bg-(--text-primary) rounded';

type Props = {
  isOpen: boolean;
  toggleOpenAction: () => void;
  ref: RefObject<HTMLDivElement | null>;
};

export const Burger: FC<Props> = ({ isOpen, toggleOpenAction, ref }) => (
  <div ref={ref} className='relative w-6 md:hidden' onClick={toggleOpenAction}>
    <motion.div
      className={`${burger} mb-[0.2rem]`}
      transition={{ duration: 0.2 }}
      initial={{ scaleX: 1 }}
      animate={{ scaleX: isOpen ? 0 : 1 }}
      exit={{ scaleX: 1 }}
      style={{ originX: 1, originY: 0 }}
    />

    <motion.div
      className={`${burger} mb-[0.2rem]`}
      transition={{ duration: 0.2 }}
      initial={{ rotate: 0 }}
      animate={{ rotate: isOpen ? -45 : 0 }}
      exit={{ rotate: 0 }}
    />

    <motion.div
      className={`${burger} absolute top-[0.4rem]`}
      transition={{ duration: 0.2 }}
      initial={{ rotate: 0 }}
      animate={{ rotate: isOpen ? 45 : 0 }}
      exit={{ rotate: 0 }}
    />

    <motion.div
      className={burger}
      transition={{ duration: 0.2 }}
      initial={{ scaleX: 1 }}
      animate={{ scaleX: isOpen ? 0 : 1 }}
      exit={{ scaleX: 1 }}
      style={{ originX: 1, originY: 0 }}
    />
  </div>
);
