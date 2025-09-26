import { FC } from 'react';
import { clsx } from 'clsx';

import {
  AppearanceAnimation,
  MovingAnimation,
  MovingAnimationProps,
  Text,
  TextProps,
} from '@/components';

const tooltipClasses =
  'px-3 py-1.5 rounded-md bg-(--foreground) text-sm shadow-lg whitespace-nowrap z-10';

type Props = Pick<TextProps, 'path'> &
  Pick<MovingAnimationProps, 'place' | 'elementRect' | 'containerRect'>;

export const Tooltip: FC<Props> = ({
  path,
  elementRect,
  containerRect,
  place = 'top',
}) => (
  <MovingAnimation
    centered
    place={place}
    elementRect={elementRect}
    containerRect={containerRect}
    className={clsx('-translate-x-1/2', tooltipClasses)}
  >
    <AppearanceAnimation show={!!elementRect}>
      <Text path={path} />
    </AppearanceAnimation>
  </MovingAnimation>
);
