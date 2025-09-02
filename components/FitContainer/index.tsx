'use client';

import { FC, ReactNode } from 'react';
import { clsx } from 'clsx';
import { useElementRect } from '@/utils';

type Props = {
  centered?: boolean;
  className?: string;
  children?: ReactNode;
};

export const FitContainer: FC<Props> = ({
  centered,
  className = '',
  children,
}) => {
  const { ref, rect } = useElementRect<HTMLDivElement>();

  const minSize = Math.min(rect?.width ?? 0, rect?.height ?? 0);

  return (
    <div
      ref={ref}
      className={clsx(
        'w-full h-full',
        centered && 'flex items-center justify-center',
      )}
    >
      <div
        className={className}
        style={{ width: `${minSize}px`, height: `${minSize}px` }}
      >
        {children}
      </div>
    </div>
  );
};
