import { normalize, schema } from 'normalizr';

import { stats } from 'src/stats/Stats.schema';

import { format } from './utils/kn3';

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
        avatar: format(avatar, 'c', 28, 28, '/channel_avatar.svg'),
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
