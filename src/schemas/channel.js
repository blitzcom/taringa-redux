import { normalize, schema } from 'normalizr';

import { formatIdentity, formatAvatar } from './utils/knn';

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
      const { stories, subscribers, thumbnail, background, ...rest } = value;

      return {
        ...rest,
        thumbnail: formatAvatar(thumbnail),
        background: formatIdentity(background),
        url: `/c/${value.name}`,
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
