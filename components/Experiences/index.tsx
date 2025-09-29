import { FC, Fragment } from 'react';
import { clsx } from 'clsx';

import { Layout, Text } from '@/components';

const EXPERIENCES = [
  'nttData2024',
  'illimity2022',
  'italiacamp2021',
  'omicron2020',
];

const borderClasses = 'md:border-r md:border-(--secondary)/80';
const hiddenClasses = 'hidden md:block';

type Props = { className?: string };

export const Experiences: FC<Props> = ({ className }) => (
  <div
    className={clsx(
      'grid auto-rows-[minmax(32vh,min-content)] md:auto-rows-[minmax(16vh,min-content)] md:grid-cols-2',
      className,
    )}
  >
    {EXPERIENCES.map((experience, index) => {
      const positionFlag = !!(index % 2);
      const isLast = index === EXPERIENCES.length - 1;
      const entry = positionFlag ? 'right' : 'left';

      return (
        <Fragment key={experience}>
          {positionFlag && (
            <div className={clsx(hiddenClasses, !isLast && borderClasses)} />
          )}

          <Layout.List
            className={clsx('relative', {
              'pb-6': !isLast,
              'md:pl-6': positionFlag,
              'md:pr-6': !positionFlag,
              'text-right': !positionFlag,
              [borderClasses]: !positionFlag,
            })}
          >
            <Text.EntryParagraph
              spaced
              secondary
              entry={entry}
              path={`experience.${experience}.date`}
            />

            <Text.EntryParagraph
              opaque
              spaced
              entry={entry}
              path={`experience.${experience}.company`}
            />

            <Text.EntryParagraph
              spaced
              semibold
              entry={entry}
              path={`experience.${experience}.role`}
            />

            <Text.EntryParagraph
              opaque
              spaced
              entry={entry}
              path={`experience.${experience}.description`}
            />

            <div
              className={clsx(
                hiddenClasses,
                'absolute top-0',
                'w-4 h-4 bg-(--secondary) rounded-full',
                positionFlag ? 'left-[-0.5rem]' : 'right-[-0.5rem]',
              )}
            />
          </Layout.List>

          {!positionFlag && <div className={hiddenClasses} />}
        </Fragment>
      );
    })}
  </div>
);
