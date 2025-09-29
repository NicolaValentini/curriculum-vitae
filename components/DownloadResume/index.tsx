import { FC } from 'react';
import { FaFileArrowDown } from 'react-icons/fa6';

import { Link, withEntryAnimation } from '@/components';

type Props = {
  type?: 'text' | 'icon';
};

const DownloadResumeBase: FC<Props> = ({ type = 'text' }) =>
  type === 'icon' ? (
    <Link
      download
      Icon={FaFileArrowDown}
      href='/files/cv-valentini-nicola.pdf'
    />
  ) : (
    <Link
      button
      download
      path='downloadResume'
      href='/files/cv-valentini-nicola.pdf'
    />
  );

export const DownloadResume = Object.assign(DownloadResumeBase, {
  Entry: withEntryAnimation<Props>(DownloadResumeBase),
});
