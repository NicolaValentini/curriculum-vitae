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

import { Tooltip } from '../Tooltip';
import { EntryAnimation } from '../Animations';

const SKILLS = [
  { path: 'skill.html', Icon: FaHtml5 },
  { path: 'skill.react', Icon: FaReact },
  { path: 'skill.backend', Icon: FaJava },
  { path: 'skill.responsive', Icon: FaMobileScreen },
  { path: 'skill.library', Icon: FaCubes },
  { path: 'skill.workflow', Icon: FaGithub },
  { path: 'skill.ruler', Icon: FaRuler },
  { path: 'skill.calendar', Icon: FaCalendarDays },
  { path: 'skill.team', Icon: FaPeopleGroup },
];

let timeout: NodeJS.Timeout | null = null;

type Props = { className?: string };

export const Skills: FC<Props> = ({ className }) => {
  const { ref: containerRef, rect: containerRect } =
    useElementRect<HTMLDivElement>();
  const {
    key: _path,
    ref: elementRef,
    rect: elementRect,
  } = useElementRect<SVGElement>();

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
      onMouseLeave={() => !timeout && elementRef(null)}
      className={clsx(
        'relative grid auto-rows-[minmax(16vh,min-content)] grid-cols-1 md:grid-cols-3 justify-items-center',
        className,
      )}
    >
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

      {_path && (
        <Tooltip
          path={_path}
          place='bottom'
          elementRect={elementRect}
          containerRect={containerRect}
        />
      )}
    </div>
  );
};
