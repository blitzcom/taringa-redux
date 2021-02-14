import { normalize, schema } from 'normalizr';

import { stats } from 'src/stats/Stats.schema';

import { formatAvatar } from './utils/knn';

export const owner = new schema.Entity(
  'users',
  {
    stats,
  },
  {
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

      const entity = Object.assign({}, rest, {
        avatar: formatAvatar(avatar, '/channel_avatar.svg'),
      });

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
