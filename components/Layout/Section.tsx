import { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

type Props = {
  className?: string;
  children: ReactNode;
};

export const Section: FC<Props> = ({ className, children }) => (
  <section className={clsx('w-full lg:w-2/3 xl:w-1/2', className)}>
    {children}
  </section>
);
