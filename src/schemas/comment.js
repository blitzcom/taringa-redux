import { normalize, schema } from 'normalizr';

import { owner } from './user';
import { thread } from './thread';

export const comment = new schema.Entity(
  'comments',
  {
    owner,
    thread,
  },
  {
    processStrategy: ({ replies, ...rest }) => ({
      ...rest,
      thread: replies,
    }),
  },
);

export default function normalizeComment(data) {
  return normalize(data, comment);
}
