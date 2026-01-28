'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { useMediaQuery } from 'react-responsive';
import { motion, useInView } from 'motion/react';

import { Burger } from '../Burger';
import { NavLinks } from '../NavLinks';
import { DownloadResume } from '../DownloadResume';
import { LocaleSwitcher } from '../LocaleSwitcher';
import { AppearanceAnimation } from '../Animations';

const initialHeaderAnimate = {
  height: 'auto',
  backdropFilter: 'none',
  transition: {
    height: { duration: 0, delay: 0.3 },
    backdropFilter: { duration: 0.3, delay: 0 },
  },
};

const scrolledHeaderAnimate = {
  height: 'auto',
  backdropFilter: 'blur(4px)',
  transition: {
    height: { duration: 0, delay: 0.3 },
    backdropFilter: { duration: 0.3, delay: 0 },
  },
};

const showHeaderAnimate = {
  height: '100vh',
  backdropFilter: 'blur(4px)',
  transition: {
    height: { duration: 0, delay: 0 },
    backdropFilter: { duration: 0.3, delay: 0.1 },
  },
};

export const Header: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const sentinelRef = useRef<HTMLDivElement>(null);
  const isSentinelInView = useInView(sentinelRef);

  const [isOpenBurger, setIsOpenBurger] = useState<boolean>(false);

  const showLinks = isMobile === isOpenBurger;

  const toggleOpenBurger = () => setIsOpenBurger(prev => !prev);
  const closeAfterTransitions = () =>
    setTimeout(() => setIsOpenBurger(false), 600);

  let headerAnimate = isSentinelInView
    ? initialHeaderAnimate
    : scrolledHeaderAnimate;

  if (isOpenBurger) {
    headerAnimate = showHeaderAnimate;
  }

  useEffect(() => {
    (() => setIsOpenBurger(false))();
  }, [isMobile]);

  return (
    <header>
      <div ref={sentinelRef} className='w-screen h-px' />

      <motion.nav
        className='fixed top-0 left-0 w-full z-1000 p-7'
        initial={initialHeaderAnimate}
        animate={headerAnimate}
      >
        <Burger
          isOpen={isOpenBurger}
          className='justify-self-end'
          toggleOpenAction={toggleOpenBurger}
        />

        <AppearanceAnimation
          show={showLinks}
          className={clsx(
            'h-full',
            'flex flex-col md:grid md:grid-cols-[1fr_3fr_1fr]',
            'justify-center items-center',
          )}
        >
          <NavLinks
            className='md:col-start-2 md:justify-self-center'
            onClickAction={closeAfterTransitions}
          />

          <div
            className={clsx(
              'pt-6 md:pt-0',
              'md:col-start-3 md:justify-self-end',
              'flex gap-6 items-center',
            )}
          >
            <LocaleSwitcher onClickAction={closeAfterTransitions} />

            <DownloadResume type='icon' />
          </div>
        </AppearanceAnimation>
      </motion.nav>
    </header>
  );
};
