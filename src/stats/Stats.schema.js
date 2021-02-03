import { schema } from 'normalizr';

export const stats = new schema.Entity(
  'stats',
  {},
  {
    idAttribute: (_, parent) => parent.id,
    processStrategy: (value, root) => ({ ...value, id: root.id }),
  },
);
