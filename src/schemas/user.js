import { normalize, schema } from 'normalizr';

import getId from './utils/get-id';

import { stats } from './stats';

export const owner = new schema.Entity(
  'users',
  {
    stats,
  },
  {
    idAttribute: (value) => getId(value),
    processStrategy(value) {
      const {
        comments,
        followers,
        following,
        stories,
        suscriptions,
        ...rest
      } = value;

      const entity = { ...rest };

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
