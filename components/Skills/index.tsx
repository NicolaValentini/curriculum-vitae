'use client';

import { FC, useState } from 'react';
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

import { AppearanceAnimation, EntryAnimation, Text } from '@/components';

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
  const [renderPath, setPath] = useState<string>('');

  const handleClick = (path: string) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    setPath(path);

    timeout = setTimeout(() => setPath(''), 5000);
  };

  return (
    <div
      className={clsx(
        'grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(16vh,min-content)] justify-items-center gap-3 md:gap-5',
        className,
      )}
    >
      {SKILLS.map(({ path, Icon }) => (
        <EntryAnimation key={path} entry='right'>
          <Icon
            size='auto'
            className='h-10 md:h-15 lg:h-20'
            onMouseLeave={() => setPath('')}
            onMouseEnter={() => setPath(path)}
            onClick={() => handleClick(path)}
          />

          <AppearanceAnimation
            show={renderPath === path}
            className='absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 rounded-md bg-gray-800 text-white text-sm shadow-lg whitespace-nowrap z-10'
          >
            <Text path={path} />
          </AppearanceAnimation>
        </EntryAnimation>
      ))}
    </div>
  );
};
