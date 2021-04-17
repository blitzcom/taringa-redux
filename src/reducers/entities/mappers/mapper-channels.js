import { formatAvatar, formatIdentity } from 'src/schemas/utils/knn';

export default function channelsMapper(current, value) {
  const { thumbnail, background, ...rest } = value;

  return {
    ...current,
    ...rest,
    thumbnail: formatAvatar(thumbnail),
    background: formatIdentity(background),
    url: `/c/${value.name}`,
  };
}
