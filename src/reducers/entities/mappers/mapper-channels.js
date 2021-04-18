import { formatAvatar, formatBackground } from 'src/schemas/utils/knn';

export default function channelsMapper(current, value) {
  const { thumbnail, background, ...rest } = value;

  return {
    ...current,
    ...rest,
    background: formatBackground(background, '/user_background.svg'),
    thumbnail: formatAvatar(thumbnail, '/channel_avatar.svg'),
    url: `/c/${value.name}`,
  };
}
