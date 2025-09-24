import { FC } from 'react';

import { Image, Layout, Text } from '@/components';
import { clsx } from 'clsx';

const PROJECTS = [
  {
    alt: 'next-template.webp',
    namePath: 'projects.nextTemplate.name',
    descriptionPath: 'projects.nextTemplate.description',
  },
  {
    alt: 'cv.webp',
    namePath: 'projects.curriculumVitae.name',
    descriptionPath: 'projects.curriculumVitae.description',
  },
];

type Props = {
  className?: string;
};

export const Projects: FC<Props> = ({ className }) => (
  <div className={clsx('flex flex-col gap-[16vh]', className)}>
    {PROJECTS.map(({ alt, namePath, descriptionPath }, index) => {
      const positionRight = !!(index % 2);

      return (
        <Layout.List
          key={alt}
          className={clsx(
            'justify-between flex-col',
            positionRight ? 'md:flex-row-reverse' : 'md:flex-row',
          )}
        >
          <Image
            alt={alt}
            imageClassName='rounded-2xl'
            className='self-center md:self-auto'
            entry={positionRight ? 'right' : 'left'}
          />

          <Layout.List className='flex-col md:w-1/2 justify-center'>
            <Text.EntryTitle
              spaced
              semibold
              path={namePath}
              entry={!positionRight ? 'right' : 'left'}
              className={!positionRight ? 'text-right' : ''}
            />

            <Text.EntryParagraph
              opaque
              spaced
              path={descriptionPath}
              entry={!positionRight ? 'right' : 'left'}
              className={!positionRight ? 'text-right' : ''}
            />
          </Layout.List>
        </Layout.List>
      );
    })}
  </div>
);
