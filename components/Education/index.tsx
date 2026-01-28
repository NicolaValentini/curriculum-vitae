import { FC } from 'react';
import { clsx } from 'clsx';

import { Link } from '../Link';
import { Text } from '../Text';
import { Layout } from '../Layout';

type Props = { className?: string };

export const Education: FC<Props> = ({ className }) => (
  <Layout.List className={clsx('min-h-[16vh]', className)}>
    <Text.EntryParagraph
      path='education.highSchool.date'
      opaque
      spaced
      entry='right'
      className='text-right'
    />

    <Link.Entry
      hrefPath='education.highSchool.link'
      path='education.highSchool.name'
      spaced
      secondary
      entry='right'
      font='text-paragraph'
      className='text-right'
    />

    <Text.EntryParagraph
      path='education.highSchool.description'
      opaque
      spaced
      entry='right'
      className='text-right'
    />
  </Layout.List>
);
