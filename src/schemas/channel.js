import { normalize, schema } from 'normalizr';

import { owner } from './user';
import { state } from './state';
import { stats } from './stats';

export const channel = new schema.Entity(
  'channels',
  {
    owner,
    state,
    stats,
  },
  {
    idAttribute: 'name',
    processStrategy(value) {
      const { stories, subscribers, ...rest } = value;

      return {
        ...rest,
        stats: {
          stories,
          subscribers,
        },
      };
    },
  },
);

export default function normalizeChannel(data) {
  return normalize(data, channel);
}
