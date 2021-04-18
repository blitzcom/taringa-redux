import { formatAvatar, formatBackground } from 'src/helpers/image/knn';
import { DEFAULT_AVATAR } from 'src/helpers/image/constants';

function fullnameMapper(value) {
  return [value.firstname, value.lastname].join(' ').trim();
}

function joinedAtMapper(value) {
  if (typeof value === 'undefined') {
    return '';
  }

  const date = new Date(value);

  // TODO: Update with i18n.
  return date.toLocaleDateString('es', { year: 'numeric', month: 'long' });
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
    joinedAt: joinedAtMapper(current?.created ?? value.created),
  };
}
