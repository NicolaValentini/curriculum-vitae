'use client';

import { FC, use, useState } from 'react';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import { motion, Transition } from 'motion/react';

import { I18nContext } from '@/context';
import { getDictionaryClient } from '@/i18n/get-dictionary.client';

const initialSelected = { x: 0, opacity: 1 };
const animateSelected = { x: -10, opacity: 0 };

const initialNotSelected = { x: 10, opacity: 0 };
const animateNotSelected = { x: 0, opacity: 1 };

const transition: Transition = { duration: 0.5, ease: 'linear' };
const classes =
  'row-start-1 col-start-1 font-semibold opacity-85 tracking-wide';

type Props = {
  className?: string;
  onClickAction?: () => void;
};

export const LocaleSwitcher: FC<Props> = ({ className, onClickAction }) => {
  const path = usePathname();
  const { locale, setI18n } = use(I18nContext);

  const [animate, setAnimate] = useState<boolean>(false);

  const secondLocale = locale === 'it' ? 'en' : 'it';

  const handleLocaleChange = async () => {
    onClickAction?.();

    setI18n({
      locale: secondLocale,
      dictionary: await getDictionaryClient(secondLocale),
    });

    // Needed to avoid all app or single page refresh and motion animations restart
    window.history.pushState({}, '', `/${secondLocale}${path.slice(3)}`);
  };

  const handleHoverStart = () => setAnimate(true);
  const handleHoverEnd = () => setAnimate(false);

  return (
    <button
      onClick={handleLocaleChange}
      className={clsx('grid cursor-pointer', className)}
    >
      <motion.p
        transition={transition}
        initial={initialSelected}
        animate={animate ? animateSelected : initialSelected}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        className={classes}
      >
        {`${locale}`.toUpperCase()}
      </motion.p>

      <motion.p
        transition={transition}
        initial={initialNotSelected}
        animate={animate ? animateNotSelected : initialNotSelected}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        className={classes}
      >
        {`${secondLocale}`.toUpperCase()}
      </motion.p>
    </button>
  );
};
