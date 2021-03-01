import { schema } from 'normalizr';

import getId from 'src/schemas/utils/get-id';

export const stats = new schema.Entity(
  'stats',
  {},
  {
    idAttribute: (_, root) => getId(root),
  },
);
