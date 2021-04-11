import { normalize, schema } from 'normalizr';

import { channel } from './channel';
import { owner } from './user';
import { state } from './state';
import { stats } from './stats';

export const item = new schema.Entity(
  'stories',
  {
    channel,
    owner,
    state,
    stats,
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
