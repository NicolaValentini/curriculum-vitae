import { FC, Fragment } from 'react';
import { clsx } from 'clsx';

import { Layout, Text } from '@/components';

const EXPERIENCES = [
  'nttData2024',
  'illimity2022',
  'italiacamp2021',
  'omicron2020',
];

type Props = { className?: string };

export const Experiences: FC<Props> = ({ className }) => {
  const borderClassName = 'md:border-r md:border-(--secondary)/80';

  return (
    <div
      className={clsx(
        'grid auto-rows-[minmax(32vh,min-content)] md:auto-rows-[minmax(16vh,min-content)] md:grid-cols-2',
        className,
      )}
    >
      {EXPERIENCES.map((experience, index) => {
        const positionRight = !!(index % 2);
        const isLast = index === EXPERIENCES.length - 1;

        return (
          <Fragment key={experience}>
            {positionRight && (
              <div
                className={clsx('hidden md:block', {
                  [borderClassName]: positionRight && !isLast,
                })}
              />
            )}

            <Layout.List
              className={clsx('relative', {
                'pb-6': !isLast,
                'md:pl-6': positionRight,
                'md:pr-6': !positionRight,
                'text-right': !positionRight,
                [borderClassName]: !positionRight,
              })}
            >
              <Text.EntryParagraph
                path={`experience.${experience}.date`}
                spaced
                secondary
                entry={positionRight ? 'right' : 'left'}
              />

              <Text.EntryParagraph
                path={`experience.${experience}.company`}
                opaque
                spaced
                entry={positionRight ? 'right' : 'left'}
              />

              <Text.EntryParagraph
                path={`experience.${experience}.role`}
                spaced
                semibold
                entry={positionRight ? 'right' : 'left'}
              />

              <Text.EntryParagraph
                path={`experience.${experience}.description`}
                opaque
                spaced
                entry={positionRight ? 'right' : 'left'}
              />

              <div
                className={clsx(
                  'hidden md:block w-4 h-4 bg-(--secondary) rounded-full absolute top-0',
                  {
                    'left-[-0.5rem]': positionRight,
                    'right-[-0.5rem]': !positionRight,
                  },
                )}
              />
            </Layout.List>

            {!positionRight && <div className='hidden md:block' />}
          </Fragment>
        );
      })}
    </div>
  );
};
