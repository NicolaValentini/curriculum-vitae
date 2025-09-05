'use client';

import { FC, MouseEvent, use, useRef } from 'react';
import { clsx } from 'clsx';
import { get } from 'lodash';
import NextLink from 'next/link';
import { IconType } from 'react-icons';

import { Text, TextProps } from '@/components';
import { I18nContext } from '@/context';

type BaseProps = {
  button?: boolean;
  download?: boolean;
  className?: string;
  contentClassName?: string;
  onClickAction?: (
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) => void;
};

type HrefProps = {
  href: string;
  hrefPath?: never;
};
type HrefPathProps = {
  href?: never;
  hrefPath: TextProps['path'];
};

type IconVariant = {
  Icon: IconType;
  path?: never;
  isNavLink?: never;
};
type TextVariant = {
  Icon?: never;
  path: string;
  isNavLink?: boolean;
} & Omit<TextProps, 'className'>;

export type Props = BaseProps &
  (HrefProps | HrefPathProps) &
  (IconVariant | TextVariant);

const isExternal = (href: string) =>
  href.startsWith('http') || href.startsWith('//');

export const LinkBase: FC<Props> = ({
  href,
  hrefPath,
  Icon,
  path,
  button,
  download,
  isNavLink,
  onClickAction,
  className = '',
  contentClassName = '',
  ...textProps
}) => {
  const { dictionary } = use(I18nContext);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const _href = href ?? get(dictionary, hrefPath, '/');

  const wrapperClassName = clsx(
    className,
    button &&
      'block w-fit bg-(--text-secondary)/80 px-6 py-3 rounded-lg tracking-widest',
  );

  let content;

  if (Icon) {
    content = (
      <Icon
        role='link'
        tabIndex={0}
        aria-label='Open link'
        className={clsx('cursor-pointer', contentClassName)}
        onClick={() => linkRef?.current?.click()}
      />
    );
  } else {
    const Component = isNavLink ? Text : Text.Link;
    content = (
      <Component
        path={path}
        className={contentClassName}
        {...(textProps ?? {})}
      />
    );
  }

  if (download) {
    return (
      <div>
        <a
          download
          href={_href}
          ref={linkRef}
          className={clsx(!Icon && wrapperClassName)}
        >
          {!Icon && content}
        </a>

        {Icon && content}
      </div>
    );
  }

  if (isExternal(_href)) {
    return (
      <a
        href={_href}
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
      href={_href}
      className={wrapperClassName}
      onClick={e => onClickAction?.(e)}
    >
      {content}
    </NextLink>
  );
};
