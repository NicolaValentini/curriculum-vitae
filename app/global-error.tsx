'use client';

import { useEffect } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { Fallback } from '@/components';

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
  title: 'Error',
  description: 'Sorry. Something went wrong.',
};

type Props = {
  error: Error & { digest?: string };
};

export default function GlobalError({ error }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Fallback
          title='Something went wrong'
          messages={['An Error occurred.', 'Try going back to the homepage.']}
        />
      </body>
    </html>
  );
}
