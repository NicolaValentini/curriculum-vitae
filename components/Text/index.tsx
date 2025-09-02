import { withEntryAnimation } from '@/components';

import { TextList, TextListProps } from './TextList';
import { TextBase, TextBaseProps } from './Text';

export type TextProps = TextBaseProps;

export const Text = Object.assign(TextBase, {
  Entry: withEntryAnimation<TextBaseProps>(TextBase),
  List: TextList,
  EntryList: withEntryAnimation<TextListProps>(TextList),
});
