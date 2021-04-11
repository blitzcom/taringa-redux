import { normalize, schema } from 'normalizr';

import getId from 'src/schemas/utils/get-id';

import { formatIdentity, formatAvatar } from './utils/knn';
import { owner } from './user';
import { stats } from './stats';

const state = new schema.Entity(
  'states',
  {},
  {
    idAttribute: (_, parent) => getId(parent),
    processStrategy: (value, root) => ({ ...value, id: root.id }),
  },
);

const channel = new schema.Entity(
  'channels',
  {
    stats,
    owner,
    state,
  },
  {
    idAttribute: (_, parent) => getId(parent),
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

export function channelNormalize(data) {
  return normalize(data, channel);
}

export const item = new schema.Entity(
  'stories',
  {
    stats,
    channel,
    owner,
    state,
  },
  {
    processStrategy(value) {
      const {
        bookmarks,
        comments,
        downvotes,
        shares,
        upvotes,
        visits,
        ...rest
      } = value;

      const entity = {
        ...rest,
        url: `/c/${value.channel.name}/${value.slug}`,
        stats: {
          bookmarks,
          comments,
          downvotes,
          shares,
          upvotes,
          visits,
        },
      };

      return entity;
    },
  },
);

export default function exec(data) {
  return normalize(data, item);
}
