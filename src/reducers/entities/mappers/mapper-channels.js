import { formatAvatar, formatBackground } from 'src/helpers/image/knn';

export default function channelsMapper(current, value) {
  const { thumbnail, background, state, stats, ...rest } = value;

  return {
    ...current,
    ...rest,
    background: formatBackground(background),
    thumbnail: formatAvatar(thumbnail),
    url: `/c/${value.name}`,
  };
}
