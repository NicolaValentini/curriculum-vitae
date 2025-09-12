import { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

type Props = {
  className?: string;
  children: ReactNode;
};

export const List: FC<Props> = ({ className, children }) => (
  <div className={clsx('flex flex-col gap-3 md:gap-5', className)}>
    {children}
  </div>
);
