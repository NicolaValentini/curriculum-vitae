'use client';

import { FC, ReactNode } from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaWhatsapp,
} from 'react-icons/fa6';

import { AppearanceAnimation, MovingElement } from '../Animations';
import { useElementRect } from '@/utils';
import { Text } from '../Text';

type Link = {
  key: string;
  icon: ReactNode;
  href?: string;
};

const links: Link[] = [
  {
    key: 'links.linkedin',
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/nicola-valentini',
  },
  {
    key: 'links.github',
    icon: <FaGithub />,
    href: 'https://github.com/NicolaValentini',
  },
  {
    key: 'links.email',
    icon: <FaEnvelope />,
  },
  {
    key: 'links.phone',
    icon: <FaWhatsapp />,
  },
  {
    key: 'links.address',
    icon: <FaLocationDot />,
  },
];

export const FooterLinks: FC = () => {
  const { ref: containerRef, rect: containerRect } =
    useElementRect<HTMLDivElement>();
  const {
    key: path,
    ref: elementRef,
    rect: elementRect,
  } = useElementRect<HTMLParagraphElement>();

  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
      Keep discovering me on
      <div
        ref={containerRef}
        className='relative flex items-center justify-center gap-4'
        onMouseLeave={() => elementRef(null)}
      >
        {links.map(({ key, icon, href }) => (
          <p
            key={key}
            onClick={e => elementRef(e.currentTarget, key)}
            onMouseEnter={e => elementRef(e.currentTarget, key)}
          >
            {href ? (
              <a target='_blank' rel='noopener noreferrer' href={href}>
                {icon}
              </a>
            ) : (
              icon
            )}
          </p>
        ))}

        <AppearanceAnimation show={!!elementRect && !!path} delay={0.1}>
          <MovingElement
            elementRect={elementRect}
            containerRect={containerRect}
            className='absolute -translate-x-1/2 bottom-full mb-2 px-3 py-1.5 rounded-md bg-gray-800 text-white text-sm shadow-lg whitespace-nowrap z-10'
          >
            {path && <Text path={path} />}
          </MovingElement>
        </AppearanceAnimation>
      </div>
    </div>
  );
};
