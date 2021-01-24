import { normalize, schema } from 'normalizr';

import { item } from './item';

const feed = new schema.Entity('feeds', {
  items: [item],
});

export default function exec(data, id) {
  return normalize({ ...data, id }, feed);
}
