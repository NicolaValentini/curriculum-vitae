import { FC } from 'react';
import { clsx } from 'clsx';
import NextImage from 'next/image';

import { EntryAnimation, EntryAnimationProps } from '@/components';

type Props = {
  alt: string;
  imageClassName?: string;
} & Omit<EntryAnimationProps, 'children'>;

export const Image: FC<Props> = ({
  alt,
  className,
  imageClassName,
  ...rest
}) => (
  <EntryAnimation
    {...rest}
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
