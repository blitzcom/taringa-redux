import { formatAvatar, formatBackground } from 'src/helpers/image/knn';
import { DEFAULT_AVATAR } from 'src/helpers/image/constants';

import timeAgoMapper from './utils/mapper-time-ago';

function fullnameMapper(value) {
  return [value.firstname, value.lastname].join(' ').trim();
}

export default function usersMapper(current, value) {
  const { avatar, background, stats, country, ...rest } = value;

  return {
    ...current,
    ...rest,
    background: formatBackground(background),
    avatar:
      avatar && avatar !== DEFAULT_AVATAR
        ? formatAvatar(avatar)
        : DEFAULT_AVATAR,
    url: `/u/${value.username}`,
    fullname: fullnameMapper(value),
    displayCreated: timeAgoMapper(current, value),
    country: country || '–',
  };
}
