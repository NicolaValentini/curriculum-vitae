import { FC } from 'react';
import { clsx } from 'clsx';
import NextImage from 'next/image';

import { EntryAnimation, WithEntryAnimationProps } from '@/components';

const squareClasses = 'w-full max-w-[32vh] h-full max-h-[32vh] aspect-square';

type Props = {
  alt: string;
  square?: boolean;
  className?: string;
};

const ImageBase: FC<Props> = ({ alt, square, className }) => (
  <NextImage
    fill
    alt={alt}
    src={`/images/${alt}`}
    className={clsx('object-cover', square && squareClasses, className)}
  />
);

const EntryImage: FC<WithEntryAnimationProps<Props>> = ({
  alt,
  square,
  className,
  animationClassName,
  ...rest
}) => (
  <EntryAnimation
    {...rest}
    className={clsx(square && squareClasses, animationClassName)}
  >
    <ImageBase alt={alt} className={className ?? ''} />
  </EntryAnimation>
);

export const Image = Object.assign(ImageBase, {
  Entry: EntryImage,
});
