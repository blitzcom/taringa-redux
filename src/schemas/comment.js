import { normalize, schema } from 'normalizr';

import { owner } from './user';

const reply = new schema.Entity('replies', {
  owner,
});

const thread = new schema.Entity(
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

const comment = new schema.Entity(
  'comments',
  {
    owner,
    thread,
  },
  {
    processStrategy: ({ replies, ...rest }) => ({
      ...rest,
      thread: replies,
    }),
  },
);

const conversation = new schema.Entity('conversations', {
  items: [comment],
});

export default function exec(data, storyId) {
  return normalize({ ...data, id: storyId }, conversation);
}
