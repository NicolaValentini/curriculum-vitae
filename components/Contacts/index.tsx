import { FC } from 'react';
import { clsx } from 'clsx';

import { Text, TextProps } from '@/components';

type Contact = { label: TextProps['path']; value: TextProps['path'] };

const CONTACTS: Contact[] = [
  { label: 'contacts.name', value: 'nameSurname' },
  { label: 'contacts.email', value: 'links.email' },
  { label: 'contacts.phone', value: 'links.phone' },
  { label: 'contacts.linkedin', value: 'links.linkedin' },
  { label: 'contacts.address', value: 'links.address' },
];

type Props = { className?: string };

export const Contacts: FC<Props> = ({ className }) => {
  const cellClassName = 'p-2.5 md:p-4';

  return (
    <table className={clsx('w-full', className)}>
      <tbody>
        {CONTACTS.map((contact, index) => (
          <tr
            key={contact.label}
            className={clsx({ 'border-t border-gray-300': index !== 0 })}
          >
            <td>
              <Text.EntryParagraph
                path={contact.label}
                opaque
                spaced
                semibold
                className={cellClassName}
              />
            </td>
            <td className='text-right'>
              <Text.EntryParagraph
                path={contact.value}
                opaque
                spaced
                entry='right'
                className={cellClassName}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
