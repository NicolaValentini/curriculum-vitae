import { FC } from 'react';
import { clsx } from 'clsx';

import { Text, TextProps } from '../Text';

type Contact = { label: TextProps['path']; value: TextProps['path'] };

const CONTACTS: Contact[] = [
  { label: 'contacts.name', value: 'nameSurname' },
  { label: 'contacts.email', value: 'links.email' },
  { label: 'contacts.phone', value: 'links.phone' },
  { label: 'contacts.linkedin', value: 'links.linkedin' },
  { label: 'contacts.address', value: 'links.address' },
];

const tdClasses = 'p-2.5 md:p-4';

type Props = { className?: string };

export const Contacts: FC<Props> = ({ className }) => (
  <table className={clsx('w-full', className)}>
    <tbody>
      {CONTACTS.map((contact, index) => (
        <tr
          key={contact.label}
          className={clsx(index !== 0 && 'border-t border-(--primary)')}
        >
          <td>
            <Text.EntryParagraph
              opaque
              spaced
              semibold
              path={contact.label}
              className={tdClasses}
            />
          </td>
          <td>
            <Text.EntryParagraph
              opaque
              spaced
              entry='right'
              path={contact.value}
              className={clsx('text-right', tdClasses)}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
