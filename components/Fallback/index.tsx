'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { FaRegCopyright } from 'react-icons/fa6';

import { Layout } from '../Layout';

type Props = {
  title: string;
  messages: string[];
};

const paragraphStyles =
  'text-base sm:text-lg xl:text-xl font-semibold opacity-85 tracking-wide text-center';

export const Fallback: FC<Props> = ({ title, messages }) => {
  const router = useRouter();

  const goHome = () => {
    router.replace('/');
    router.refresh();
  };

  return (
    <div className='min-h-screen overflow-hidden px-8 sm:px-16 lg:px-0 flex flex-col items-center justify-center gap-12'>
      <p className='text-2xl sm:text-3xl xl:text-4xl font-bold text-(--secondary) tracking-wide'>
        {title}
      </p>

      <Layout.Section className='flex flex-col gap-2'>
        <p className={paragraphStyles}>Sorry !</p>

        {messages.map(message => (
          <p key={message} className={paragraphStyles}>
            {message}
          </p>
        ))}
      </Layout.Section>

      <button
        onClick={goHome}
        className='pointer block w-fit bg-(--secondary)/80 px-6 py-3 rounded-lg tracking-widest'
      >
        <p className='text-xs md:text-sm xl:text-base font-bold'>
          Go to homepage.
        </p>
      </button>

      <footer className='fixed bottom-0 right-0 m-7 flex items-center gap-4'>
        <FaRegCopyright /> 2026 Valentini Nicola
      </footer>
    </div>
  );
};
