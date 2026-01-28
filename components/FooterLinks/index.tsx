'use client';

import { FC, MouseEvent, useRef } from 'react';
import { clsx } from 'clsx';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaWhatsapp,
} from 'react-icons/fa6';

import { useElementRect } from '@/utils';

import { Link } from '../Link';
import { Tooltip } from '../Tooltip';

const links = [
  {
    path: 'links.linkedin',
    Icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/nicola-valentini',
  },
  {
    path: 'links.github',
    Icon: FaGithub,
    href: 'https://github.com/NicolaValentini',
  },
  {
    path: 'links.email',
    Icon: FaEnvelope,
  },
  {
    path: 'links.phone',
    Icon: FaWhatsapp,
  },
  {
    path: 'links.address',
    Icon: FaLocationDot,
  },
];

export const FooterLinks: FC = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { ref: containerRef, rect: containerRect } =
    useElementRect<HTMLDivElement>();
  const {
    key: _path,
    ref: elementRef,
    rect: elementRect,
  } = useElementRect<HTMLParagraphElement>();

  const handleClick = (
    e: MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>,
    key: string,
  ) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    elementRef(e.currentTarget, key);

    timeoutRef.current = setTimeout(() => elementRef(null), 5000);
  };

  return (
    <div className='flex flex-col md:flex-row items-center justify-center'>
      Keep discovering me on
      <div
        ref={containerRef}
        className='relative flex items-center justify-center mt-4 md:mt-0 md:ml-4'
        onMouseLeave={() => !timeoutRef.current && elementRef(null)}
      >
        {links.map(({ path, Icon, href }, index) => (
          <p
            key={path}
            className={clsx(index && 'ml-4')}
            onClick={e => !href && handleClick(e, path)}
            onMouseEnter={e => elementRef(e.currentTarget, path)}
          >
            {href ? <Link href={href} Icon={Icon} /> : <Icon />}
          </p>
        ))}

        {_path && (
          <Tooltip
            path={_path}
            elementRect={elementRect}
            containerRect={containerRect}
          />
        )}
      </div>
    </div>
  );
};
