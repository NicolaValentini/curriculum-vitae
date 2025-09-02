import { FC } from 'react';

import { Text, TextProps } from '@/components';

export type TextListProps = Omit<TextProps, 'path' | 'className'> & {
  paths: string[];
  className?: string;
  textClassName?: string;
};

export const TextList: FC<TextListProps> = ({
  paths,
  className = 'flex flex-col gap-3 md:gap-5 m-auto',
  textClassName = 'text-center text-base sm:text-lg xl:text-xl',
  ...rest
}) => (
  <div className={className}>
    {paths.map(path => (
      <Text key={path} path={path} className={textClassName} {...rest} />
    ))}
  </div>
);
