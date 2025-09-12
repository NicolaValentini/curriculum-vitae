import { FC } from 'react';
import { clsx } from 'clsx';
import NextImage from 'next/image';

import { EntryAnimation } from '@/components';

type Props = {
  alt: string;
  maxSize?: number;
  className?: string;
  imageClassName?: string;
};

export const Image: FC<Props> = ({ alt, className, imageClassName }) => (
  <EntryAnimation
    className={clsx(
      'w-full max-w-[32vh] max-h-[32vh] aspect-square',
      className,
    )}
  >
    <NextImage
      fill
      alt={alt}
      src={`/images/${alt}`}
      className={clsx('object-cover', imageClassName)}
    />
  </EntryAnimation>
);
