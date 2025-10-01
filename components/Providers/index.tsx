'use client';

import { FC, ReactNode, useState } from 'react';
import { IconContext } from 'react-icons';

import { Locale } from '../../i18n-config';

import { I18nContext, i18nData } from '@/context';

type Props = {
  locale: Locale;
  dictionary: object;
  children: ReactNode;
};

export const Providers: FC<Props> = ({
  locale: initialLocale,
  dictionary: initialDictionary,
  children,
}) => {
  const [{ locale, dictionary }, setI18n] = useState<i18nData>({
    locale: initialLocale,
    dictionary: initialDictionary,
  });

  return (
    <I18nContext.Provider value={{ locale, dictionary, setI18n }}>
      <IconContext.Provider value={{ className: 'inline align-text-top' }}>
        {children}
      </IconContext.Provider>
    </I18nContext.Provider>
  );
};
