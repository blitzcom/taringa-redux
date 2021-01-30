import { normalize, schema } from 'normalizr';

import { owner } from './user';

const reply = new schema.Entity('replies', {
  owner,
});

const replyFeed = new schema.Entity(
  'stream-replies',
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

const comment = new schema.Entity('comments', {
  owner,
  replies: replyFeed,
});

const feed = new schema.Entity('stream-comments', {
  items: [comment],
});

export default function exec(data, storyId) {
  return normalize({ ...data, id: storyId }, feed);
}
