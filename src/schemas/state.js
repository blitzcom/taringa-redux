import { normalize, schema } from 'normalizr';

import getId from './utils/get-id';

export const state = new schema.Entity(
  'states',
  {},
  {
    idAttribute: (_, parent) => getId(parent),
    processStrategy: (value, root) => ({ ...value, id: root.id }),
  },
);

export default function normalizeState(data) {
  return normalize(data, state);
}
