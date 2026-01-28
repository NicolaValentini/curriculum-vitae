import { FC } from 'react';
import { clsx } from 'clsx';

import { Link } from '../Link';
import { Text } from '../Text';
import { Layout } from '../Layout';

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
        'grid auto-rows-[minmax(16vh,min-content)] grid-cols-2 md:grid-cols-3',
        className,
      )}
    >
      {TRAININGS.map(training => (
        <Layout.List key={training}>
          <Link.Entry
            hrefPath={`training.${training}.link`}
            path={`training.${training}.name`}
            spaced
            font='text-paragraph'
            className='text-center'
          />

          <Text.EntryParagraph
            path={`training.${training}.description`}
            opaque
            spaced
            secondary
            className='text-center'
          />
        </Layout.List>
      ))}
    </div>
  );
};
