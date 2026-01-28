import { withEntryAnimation } from '../Animations';

import { LinkBase, Props } from './Link';

export const Link = Object.assign(LinkBase, {
  Entry: withEntryAnimation<Props>(LinkBase),
});
