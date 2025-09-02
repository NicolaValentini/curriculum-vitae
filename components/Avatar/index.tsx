import { FC } from 'react';
import { clsx } from 'clsx';
import Image from 'next/image';

import { FitContainer, withEntryAnimation } from '@/components';

type Props = {
  className?: string;
};

export const AvatarBase: FC<Props> = ({ className = '' }) => (
  <FitContainer centered className={clsx('relative', className)}>
    <Image
      fill
      alt='avatar'
      src='/images/me2.jpg'
      className='object-cover rounded-full aspect-square'
    />
  </FitContainer>
);

export const Avatar = Object.assign(AvatarBase, {
  Entry: withEntryAnimation<Props>(AvatarBase),
});
