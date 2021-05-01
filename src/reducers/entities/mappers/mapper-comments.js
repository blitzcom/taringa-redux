import timeAgoMapper from './utils/mapper-time-ago';

export default function commentsMapper(current, value) {
  return {
    ...current,
    ...value,
    displayCreated: timeAgoMapper(current, value),
  };
}
