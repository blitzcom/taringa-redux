import { schema } from 'normalizr';

export const stats = new schema.Entity(
  'stats',
  {},
  {
    idAttribute: (_, parent) => parent.id,
    processStrategy: (value, root) => {
      if (root.type === 'channel' || root.type === 'channel:summary') {
        return { ...value, id: root.name };
      }

      return { ...value, id: root.id };
    },
  },
);
