import { formatAvatar, formatBackground } from 'src/helpers/image/knn';

import joinedAtMapper from './utils/mapper-joined-at';

export default function channelsMapper(current, value) {
  const { thumbnail, background, state, stats, ...rest } = value;

  return {
    ...current,
    ...rest,
    background: formatBackground(background),
    thumbnail: formatAvatar(thumbnail),
    url: value.name.startsWith('user-') ? null : `/c/${value.name}`,
    joinedAt: joinedAtMapper(current, value),
  };
}
