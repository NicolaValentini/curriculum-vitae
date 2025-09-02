'use client';

import { FC, MouseEvent, useRef } from 'react';
import { clsx } from 'clsx';
import NextLink from 'next/link';
import { IconType } from 'react-icons';

import { Text, TextProps, withEntryAnimation } from '@/components';

type BaseProps = {
  href: string;
  button?: boolean;
  download?: boolean;
  className?: string;
  contentClassName?: string;
  onClickAction?: (
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) => void;
} & Omit<TextProps, 'path' | 'className'>;

type IconVariant = BaseProps & {
  Icon: IconType;
  path?: never;
};
type TextVariant = BaseProps & {
  Icon?: never;
  path: string;
};

export type Props = IconVariant | TextVariant;

const isExternal = (href: string) =>
  href.startsWith('http') || href.startsWith('//');

export const LinkBase: FC<Props> = ({
  href,
  Icon,
  path,
  button,
  download,
  onClickAction,
  className = '',
  contentClassName = '',
  ...textProps
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const wrapperClassName = clsx(
    className,
    button &&
      'block w-fit bg-(--text-secondary)/80 px-6 py-3 rounded-lg tracking-widest',
  );

  const content = Icon ? (
    <Icon
      role='link'
      tabIndex={0}
      aria-label='Open link'
      className={clsx('cursor-pointer', contentClassName)}
      onClick={() => linkRef?.current?.click()}
    />
  ) : (
    <Text path={path} className={contentClassName} {...textProps} />
  );

  if (download) {
    return (
      <div>
        <a
          download
          href={href}
          ref={linkRef}
          className={clsx(!Icon && wrapperClassName)}
        >
          {!Icon && content}
        </a>

        {Icon && content}
      </div>
    );
  }

  if (isExternal(href)) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={wrapperClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      className={wrapperClassName}
      onClick={e => onClickAction?.(e)}
    >
      {content}
    </NextLink>
  );
};

export const Link = Object.assign(LinkBase, {
  Entry: withEntryAnimation<Props>(LinkBase),
});
