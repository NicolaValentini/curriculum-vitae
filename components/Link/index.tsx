import { withEntryAnimation } from '@/components';

import { LinkBase, Props } from './Link';

export const Link = Object.assign(LinkBase, {
  Entry: withEntryAnimation<Props>(LinkBase),
});
