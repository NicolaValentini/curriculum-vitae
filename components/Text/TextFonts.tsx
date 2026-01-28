import { FC } from 'react';
import { clsx } from 'clsx';

import { TextBase, TextBaseProps } from './Text';

export const TextParagraph: FC<TextBaseProps> = ({ className, ...rest }) => (
  <TextBase
    className={clsx('text-base sm:text-lg xl:text-xl', className)}
    {...rest}
  />
);

export const TextTitle: FC<TextBaseProps> = ({ className, ...rest }) => (
  <TextBase
    className={clsx('text-xl sm:text-2xl xl:text-3xl', className)}
    {...rest}
  />
);

export const TextSmall: FC<TextBaseProps> = ({ className, ...rest }) => (
  <TextBase
    className={clsx('text-xs md:text-sm xl:text-base', className)}
    {...rest}
  />
);
