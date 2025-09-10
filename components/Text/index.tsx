import { withEntryAnimation } from '@/components';

import { TextBase, TextBaseProps } from './Text';
import { TextList, TextListProps } from './TextList';
import { TextSmall, TextParagraph, TextTitle } from './TextFonts';

export type TextProps = TextBaseProps;

export const Text = Object.assign(TextBase, {
  Entry: withEntryAnimation<TextProps>(TextBase),
  List: TextList,
  EntryList: withEntryAnimation<TextListProps>(TextList),
  Paragraph: TextParagraph,
  EntryParagraph: withEntryAnimation<TextProps>(TextParagraph),
  Title: TextTitle,
  EntryTitle: withEntryAnimation<TextProps>(TextTitle),
  Small: TextSmall,
  EntrySmall: withEntryAnimation<TextProps>(TextSmall),
});
