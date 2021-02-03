import { normalize, schema } from 'normalizr';

import { stats } from 'src/stats/Stats.schema';

export const owner = new schema.Entity(
  'users',
  {
    stats,
  },
  {
    processStrategy(value) {
      const {
        comments,
        followers,
        following,
        stories,
        suscriptions,
        ...rest
      } = value;

      const entity = Object.assign({}, rest, {
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
