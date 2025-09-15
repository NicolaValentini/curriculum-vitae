import { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

type Props = {
  className?: string;
  children: ReactNode;
};

const hasDifferentFlexDirection = (className?: string) =>
  className?.includes('flex-row') ||
  className?.includes('flex-row-reverse') ||
  className?.includes('flex-col-reverse');

export const List: FC<Props> = ({ className, children }) => (
  <div
    className={clsx(
      'flex gap-3 md:gap-5',
      !hasDifferentFlexDirection(className) && 'flex-col',
      className,
    )}
  >
    {children}
  </div>
);
