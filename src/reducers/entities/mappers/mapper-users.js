import { formatAvatar, formatBackground } from 'src/helpers/image/knn';
import { DEFAULT_AVATAR } from 'src/helpers/image/constants';

import joinedAtMapper from './utils/mapper-joined-at';

function fullnameMapper(value) {
  return [value.firstname, value.lastname].join(' ').trim();
}

export default function usersMapper(current, value) {
  const { avatar, background, stats, ...rest } = value;

  return {
    ...current,
    ...rest,
    background: formatBackground(background),
    avatar:
      avatar && avatar !== DEFAULT_AVATAR
        ? formatAvatar(value.avatar)
        : DEFAULT_AVATAR,
    url: `/u/${value.username}`,
    fullname: fullnameMapper(value),
    joinedAt: joinedAtMapper(current, value),
  };
}
