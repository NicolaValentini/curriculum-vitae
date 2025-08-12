import { createContext, Dispatch, SetStateAction } from 'react';

import { Locale } from '../../i18n-config';

export type i18nData = {
  locale: Locale;
  dictionary: object;
};

type i18nContext = i18nData & {
  setI18n: Dispatch<SetStateAction<i18nData>>;
};

export const I18nContext = createContext<i18nContext>({
  locale: 'it',
  dictionary: {},
  setI18n: () => {},
});
