import { FC } from 'react';
import { clsx } from 'clsx';

import { Link, Text } from '@/components';

type Props = { className?: string };

export const Education: FC<Props> = ({ className }) => {
  return (
    <div
      className={clsx('min-h-[16vh] flex flex-col gap-3 md:gap-5', className)}
    >
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
    </div>
  );
};
