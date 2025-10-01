import { FC } from 'react';
import { FaRegCopyright } from 'react-icons/fa6';

import { FooterLinks } from '@/components';

export const Footer: FC = () => (
  <footer className='min-h-[32vh] md:min-h-[16vh] content-end'>
    <div className='flex flex-col md:flex-row md:justify-between gap-4 m-7'>
      <FooterLinks />

      <div className='flex items-center justify-center gap-4'>
        <FaRegCopyright /> 2025 Valentini Nicola
      </div>
    </div>
  </footer>
);
