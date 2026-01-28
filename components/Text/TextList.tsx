import { FC } from 'react';
import { clsx } from 'clsx';

import { Layout } from '../Layout';

import { TextBaseProps } from './Text';
import { TextParagraph } from './TextFonts';

export type TextListProps = Omit<TextBaseProps, 'path' | 'className'> & {
  paths: string[];
  className?: string;
  textClassName?: string;
};

export const TextList: FC<TextListProps> = ({
  paths,
  className,
  textClassName,
  ...rest
}) => (
  <Layout.List className={clsx('m-auto', className)}>
    {paths.map(path => (
      <TextParagraph
        key={path}
        path={path}
        className={clsx('text-center', textClassName)}
        {...rest}
      />
    ))}
  </Layout.List>
);
