'use client';

import { FC, use, useRef } from 'react';
import { get } from 'lodash';
import { FaFileArrowDown } from 'react-icons/fa6';

import { I18nContext } from '@/context';

type Props = {
  type?: 'text' | 'icon';
};

export const DownloadResume: FC<Props> = ({ type = 'text' }) => {
  const { dictionary } = use(I18nContext);
  const linkRef = useRef<HTMLAnchorElement>(null);

  if (type === 'icon') {
    return (
      <>
        <a
          download
          ref={linkRef}
          className='hidden'
          href='/files/cv-valentini-nicola.pdf'
        />

        <FaFileArrowDown
          className='cursor-pointer'
          onClick={() => linkRef?.current?.click()}
        />
      </>
    );
  }

  return (
    <a
      download
      href='/files/cv-valentini-nicola.pdf'
      className='block w-fit bg-(--text-secondary)/80 px-6 py-3 rounded-lg tracking-widest text-xs md:text-sm xl:text-base'
    >
      {get(dictionary, 'downloadResume', '')}
    </a>
  );
};
