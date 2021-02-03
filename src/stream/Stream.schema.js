import { normalize, schema } from 'normalizr';

import { item } from 'src/schemas/item';

export const STREAMS = {
  CONTAINERS: 'containers',
  USERS: 'users',
};

function createSchema(streamName) {
  return new schema.Entity(`stream-${streamName}`, {
    items: [item],
  });
}

export default function exec(data, id, streamName) {
  return normalize({ ...data, id }, createSchema(streamName));
}
