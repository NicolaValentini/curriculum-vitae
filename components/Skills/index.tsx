'use client';

import { FC, MouseEvent } from 'react';
import { clsx } from 'clsx';
import {
  FaCalendarDays,
  FaCubes,
  FaGithub,
  FaHtml5,
  FaJava,
  FaMobileScreen,
  FaPeopleGroup,
  FaReact,
  FaRuler,
} from 'react-icons/fa6';

import { useElementRect } from '@/utils';
import {
  AppearanceAnimation,
  EntryAnimation,
  MovingElement,
  Text,
} from '@/components';

const SKILLS = [
  { path: 'skill.html', Icon: FaHtml5 },
  { path: 'skill.react', Icon: FaReact },
  { path: 'skill.library', Icon: FaCubes },
  { path: 'skill.backend', Icon: FaJava },
  { path: 'skill.workflow', Icon: FaGithub },
  { path: 'skill.ruler', Icon: FaRuler },
  { path: 'skill.responsive', Icon: FaMobileScreen },
  { path: 'skill.calendar', Icon: FaCalendarDays },
  { path: 'skill.team', Icon: FaPeopleGroup },
];

let timeout: NodeJS.Timeout | null = null;

type Props = { className?: string };

export const Skills: FC<Props> = ({ className }) => {
  const { ref: containerRef, rect: containerRect } =
    useElementRect<HTMLDivElement>();
  const {
    key: path,
    ref: elementRef,
    rect: elementRect,
  } = useElementRect<SVGElement>();

  const removeRefs = () => {
    if (!timeout) {
      elementRef(null);
      containerRef(null);
    }
  };

  const handleClick = (
    e: MouseEvent<SVGElement, globalThis.MouseEvent>,
    key: string,
  ) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    elementRef(e.currentTarget, key);

    timeout = setTimeout(() => elementRef(null), 5000);
  };

  return (
    <div
      ref={containerRef}
      onMouseLeave={removeRefs}
      className={clsx('relative', className)}
    >
      <div className='grid grid-cols-3 auto-rows-[minmax(16vh,min-content)] justify-items-center gap-3 md:gap-5'>
        {SKILLS.map(({ path, Icon }) => (
          <EntryAnimation key={path} entry='right'>
            <Icon
              size='auto'
              className='h-10 md:h-15 lg:h-20'
              onClick={e => handleClick(e, path)}
              onMouseEnter={e => elementRef(e.currentTarget, path)}
            />
          </EntryAnimation>
        ))}
      </div>

      <AppearanceAnimation show={!!(path && elementRect)} delay={0.1}>
        <MovingElement
          centered
          place='bottom'
          elementRect={elementRect}
          containerRect={containerRect}
          className='absolute -translate-x-1/2 mt-2 px-3 py-1.5 rounded-md bg-gray-800 text-white text-sm shadow-lg whitespace-nowrap z-10'
        >
          {path && <Text path={path} />}
        </MovingElement>
      </AppearanceAnimation>
    </div>
  );
};
