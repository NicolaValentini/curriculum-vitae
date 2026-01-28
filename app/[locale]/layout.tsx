import { ReactNode } from 'react';

import { Locale } from '@/root/i18n-config';
import { getDictionary } from '@/i18n/get-dictionary';
import { Footer, Header, Providers } from '@/components';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function Layout({ children, params }: Props) {
  const locale = (await params).locale as Locale;

  const dictionary = await getDictionary(locale);

  return (
    <Providers locale={locale} dictionary={dictionary}>
      <Header />

      {children}

      <Footer />
    </Providers>
  );
}
