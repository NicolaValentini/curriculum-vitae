import { FC } from 'react';
import { clsx } from 'clsx';

import { Text, TextProps } from '@/components';

export const TextParagraph: FC<TextProps> = ({ className, ...rest }) => (
  <Text
    className={clsx('text-base sm:text-lg xl:text-xl', className)}
    {...rest}
  />
);

export const TextTitle: FC<TextProps> = ({ className, ...rest }) => (
  <Text
    className={clsx('text-xl sm:text-2xl xl:text-3xl', className)}
    {...rest}
  />
);

export const TextSmall: FC<TextProps> = ({ className, ...rest }) => (
  <Text
    className={clsx('text-xs md:text-sm xl:text-base', className)}
    {...rest}
  />
);
