import timeAgoMapper from './utils/mapper-time-ago';
import { inlineMarkdownMapper } from './utils/mapper-markdown';

export default function commentsMapper(current, value) {
  return {
    ...current,
    ...value,
    displayCreated: timeAgoMapper(current, value),
    body: inlineMarkdownMapper(value.body),
  };
}
