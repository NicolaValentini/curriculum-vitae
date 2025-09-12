import { FC } from 'react';
import { clsx } from 'clsx';

import { Layout, Text, TextProps } from '@/components';

export type TextListProps = Omit<TextProps, 'path' | 'className'> & {
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
      <Text.Paragraph
        key={path}
        path={path}
        className={clsx('text-center', textClassName)}
        {...rest}
      />
    ))}
  </Layout.List>
);
