import { normalize, schema } from 'normalizr';

import { reply } from './reply';

export const thread = new schema.Entity(
  'threads',
  {
    items: [reply],
  },
  {
    idAttribute: (_, parent) => parent.id,
    processStrategy: (value, parent) => ({
      ...value,
      id: parent.id,
    }),
  },
);

export default function normalizeThread(data) {
  return normalize(data, thread);
}
