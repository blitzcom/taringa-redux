import { normalize, schema } from 'normalizr';

import { stats } from './stats';

import { formatAvatar } from './utils/knn';
import getId from './utils/get-id';

export const owner = new schema.Entity(
  'users',
  {
    stats,
  },
  {
    idAttribute: (value) => getId(value),
    processStrategy(value) {
      const {
        avatar,
        comments,
        followers,
        following,
        stories,
        suscriptions,
        ...rest
      } = value;

      const entity = {
        ...rest,
        url: `/u/${value.username}`,
        avatar: formatAvatar(avatar, '/channel_avatar.svg'),
      };

      if (value.type === 'user:summary') {
        return entity;
      }

      Object.assign(entity, {
        stats: {
          comments,
          followers,
          following,
          stories,
          suscriptions,
        },
      });

      return entity;
    },
  },
);

export default function exec(data) {
  return normalize(data, owner);
}
