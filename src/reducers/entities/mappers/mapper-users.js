import { formatAvatar, formatBackground } from 'src/schemas/utils/knn';

export default function usersMapper(current, value) {
  const { avatar, background, stats, ...rest } = value;

  return {
    ...current,
    ...rest,
    background: formatBackground(background, '/user_background.svg'),
    avatar:
      avatar && avatar !== '/channel_avatar.svg'
        ? formatAvatar(value.avatar)
        : '/channel_avatar.svg',
    url: `/u/${value.username}`,
  };
}
