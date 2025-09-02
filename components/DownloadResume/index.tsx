import { FC } from 'react';
import { FaFileArrowDown } from 'react-icons/fa6';

import { Link, withEntryAnimation } from '@/components';

type Props = {
  type?: 'text' | 'icon';
};

const DownloadResumeBase: FC<Props> = ({ type = 'text' }) => {
  if (type === 'icon') {
    return (
      <Link
        download
        Icon={FaFileArrowDown}
        href='/files/cv-valentini-nicola.pdf'
      />
    );
  }

  return (
    <Link
      button
      download
      path='downloadResume'
      href='/files/cv-valentini-nicola.pdf'
      contentClassName='text-xs md:text-sm xl:text-base'
    />
  );
};

export const DownloadResume = Object.assign(DownloadResumeBase, {
  Entry: withEntryAnimation<Props>(DownloadResumeBase),
});
