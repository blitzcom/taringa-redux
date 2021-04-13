import { formatAvatar } from 'src/schemas/utils/knn';

export default function usersMapper(current, value) {
  const { avatar, ...rest } = value;

  return {
    ...current,
    ...rest,
    avatar:
      avatar && avatar !== '/channel_avatar.svg'
        ? formatAvatar(value.avatar)
        : '/channel_avatar.svg',
    url: `/u/${value.username}`,
  };
}
