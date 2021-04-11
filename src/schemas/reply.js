import { normalize, schema } from 'normalizr';

import { owner } from './user';

export const reply = new schema.Entity('replies', {
  owner,
});

export default function normalizeReply(data) {
  return normalize(data, reply);
}
