import { normalize, schema } from 'normalizr';

import { story } from './story';

const feed = new schema.Entity('feeds', {
  items: [story],
});

export default function exec(data, id) {
  return normalize({ ...data, id }, feed);
}
