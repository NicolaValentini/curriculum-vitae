'use client';

import { FC, use, useEffect } from 'react';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

import { I18nContext } from '@/context';
import { useElementRect } from '@/utils';
import { Link, MovingAnimation } from '@/components';

const pages = [
  { label: 'titles.home', href: '/' },
  { label: 'titles.aboutMe', href: '/who-i-am' },
  { label: 'titles.resume', href: '/resume' },
  { label: 'titles.projects', href: '/projects' },
];

type Props = {
  onClickAction: () => void;
  className?: string;
};

export const NavLinks: FC<Props> = ({ onClickAction, className }) => {
  const path = usePathname();
  const { locale } = use(I18nContext);

  const { ref: containerRef, rect: containerRect } =
    useElementRect<HTMLUListElement>();
  const {
    ref: elementRef,
    rect: elementRect,
    updateRect: updateElementRect,
  } = useElementRect<HTMLLIElement>();

  const realPath = path.slice(3)?.length > 0 ? path.slice(3) : '/';

  const setElementRef = (el: HTMLLIElement | null, href: string) => {
    if (realPath === href && el) {
      elementRef(el);
    }
  };

  useEffect(() => {
    updateElementRect();
  }, [locale, updateElementRect]);

  return (
    <ul
      ref={containerRef}
      className={clsx(
        'relative flex flex-col md:flex-row items-center gap-6 lg:gap-12',
        className,
      )}
    >
      {pages.map(({ label, href }) => (
        <li key={href} ref={el => setElementRef(el, href)}>
          <Link
            href={href}
            onClickAction={onClickAction}
            bold
            path={label}
            opaque={realPath !== href}
            font='text-paragraph'
          />
        </li>
      ))}

      <MovingAnimation
        widthAsElement
        elementRect={elementRect}
        containerRect={containerRect}
        className='hidden md:block bottom-0 h-0.5 bg-(--primary) rounded'
      />
    </ul>
  );
};
