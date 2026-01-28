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
  title: 'Page Not Found',
  description: 'Sorry. The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Fallback
          title='Page Not Found'
          messages={[
            'The page you are looking for cannot be found.',
            'Try going back to the homepage.',
          ]}
        />
      </body>
    </html>
  );
}
