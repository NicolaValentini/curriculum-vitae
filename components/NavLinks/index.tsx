'use client';

import { FC, use, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { I18nContext } from '@/context';
import { useElementRect } from '@/utils';

import { Text } from '../Text';
import { MovingElement } from '../Animations';

const pages = [
  { label: 'titles.home', href: '/' },
  { label: 'titles.aboutMe', href: '/who-i-am' },
  { label: 'titles.contacts', href: '/contacts' },
];

type Props = {
  show: boolean;
  onClickAction: () => void;
};

export const NavLinks: FC<Props> = ({ onClickAction }) => {
  const path = usePathname();
  const { locale } = use(I18nContext);

  const { ref: containerRef, rect: containerRect } =
    useElementRect<HTMLUListElement>();
  const {
    ref: elementRef,
    rect: elementRect,
    update: updateElementRect,
  } = useElementRect<HTMLLIElement>();

  const realPath = path.slice(3)?.length > 0 ? path.slice(3) : '/';

  const setElementRef = (el: HTMLLIElement | null, href: string) => {
    if (realPath === href) {
      elementRef(el);
    }
  };

  useEffect(() => {
    updateElementRect();
  }, [locale, updateElementRect]);

  return (
    <ul
      ref={containerRef}
      className='relative flex flex-col md:flex-row items-center gap-6 lg:gap-12'
    >
      {pages.map(({ label, href }) => (
        <li key={href} ref={el => setElementRef(el, href)}>
          <Link href={href} onClick={onClickAction}>
            <Text bold path={label} opaque={realPath !== href} />
          </Link>
        </li>
      ))}

      <MovingElement
        setWidth
        elementRect={elementRect}
        containerRect={containerRect}
        className='hidden md:block absolute bottom-0 h-0.5 bg-(--text-primary) rounded'
      />
    </ul>
  );
};
