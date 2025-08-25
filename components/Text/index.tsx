'use client';

import { FC, use } from 'react';
import { get } from 'lodash';

import { I18nContext } from '@/context';

type Props = {
  path: string;
  bold?: boolean;
  semibold?: boolean;
  opaque?: boolean;
  spaced?: boolean;
  secondary?: boolean;
  className?: string;
};

export const Text: FC<Props> = ({
  path,
  bold,
  semibold,
  opaque,
  spaced,
  secondary,
  className: classNameProps = '',
}) => {
  const { dictionary } = use(I18nContext);

  let className = classNameProps;

  if (bold) className += ' font-bold';
  if (semibold) className += ' font-semibold';
  if (opaque) className += ' opacity-85';
  if (spaced) className += ' tracking-wide';
  if (secondary) className += ' text-(--text-secondary)';

  return <p className={className}>{get(dictionary, path, '')}</p>;
};
