import { normalize, schema } from 'normalizr';

import getId from './utils/get-id';

export const stats = new schema.Entity(
  'stats',
  {},
  {
    idAttribute: (_, root) => getId(root),
  },
);

export default function normalizeStats(data) {
  return normalize(data, stats);
}
