import { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

type Props = {
  className?: string;
  children: ReactNode;
};

export const Main: FC<Props> = ({ className, children }) => (
  <main
    className={clsx(
      'min-h-screen overflow-hidden',
      'mt-[16vh] px-8 sm:px-16 lg:px-0',
      'flex flex-col items-center gap-[16vh]',
      className,
    )}
  >
    {children}
  </main>
);
