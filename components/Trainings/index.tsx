import { FC } from 'react';
import { clsx } from 'clsx';

import { Link, Text } from '@/components';

const TRAININGS = [
  'regional',
  'reactBeginner',
  'git',
  'cleanCode',
  'css',
  'react19',
  'next15',
  'reactNative',
];

type Props = { className?: string };

export const Trainings: FC<Props> = ({ className }) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5',
        className,
      )}
    >
      {TRAININGS.map(training => (
        <div
          key={training}
          className={clsx('min-h-[16vh] flex flex-col gap-3 md:gap-5')}
        >
          <Link.Entry
            hrefPath={`training.${training}.link`}
            path={`training.${training}.name`}
            spaced
            className='text-base sm:text-lg xl:text-xl text-center'
          />

          <Text.EntryParagraph
            path={`training.${training}.description`}
            opaque
            spaced
            secondary
            className='text-center'
          />
        </div>
      ))}
    </div>
  );
};
