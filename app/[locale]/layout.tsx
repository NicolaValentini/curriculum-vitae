import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { i18n, Locale } from '../../i18n-config';

import { getDictionary } from '@/i18n/get-dictionary';
import { Footer, Header, Providers } from '@/components';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nicola Valentini',
  description: 'My curriculum vitae made with next - 2025',
};

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default async function RootLayout(props: Props) {
  const locale = (await props.params).locale as Locale;

  const dictionary = await getDictionary(locale);

  const { children } = props;

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers locale={locale} dictionary={dictionary}>
          <Header />

          {children}

          <div className='pt-[16vh]'>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
