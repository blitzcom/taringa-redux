import { formatAvatar, formatBackground } from 'src/helpers/image/knn';

import timeAgoMapper from './utils/mapper-time-ago';

export default function channelsMapper(current, value) {
  const { thumbnail, background, state, stats, ...rest } = value;

  return {
    ...current,
    ...rest,
    background: formatBackground(background),
    thumbnail: formatAvatar(thumbnail),
    url: value.name.startsWith('user-') ? null : `/c/${value.name}`,
    displayCreated: timeAgoMapper(current, value),
  };
}
