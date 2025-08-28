'use client';

import { FC, ReactNode, useEffect, useRef, useState } from 'react';

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
  const ref = useRef<HTMLDivElement>(null);
  const [minSize, setSize] = useState<number>(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(entries =>
      setSize(
        Math.min(
          entries[0]?.contentRect?.width ?? 0,
          entries[0]?.contentRect?.height ?? 0,
        ),
      ),
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full h-full ${centered ? 'flex items-center justify-center' : ''}`}
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
