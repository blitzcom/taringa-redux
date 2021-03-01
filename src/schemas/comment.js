import { normalize, schema } from 'normalizr';

import { owner } from './user';

const reply = new schema.Entity('replies', {
  owner,
});

const replyFeed = new schema.Entity(
  'feeds',
  {
    items: [reply],
  },
  {
    idAttribute: (_, parent) => `comment-replies-${parent.id}`,
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

const feed = new schema.Entity('feeds', {
  items: [comment],
});

export default function exec(data, storyId) {
  return normalize({ ...data, id: `story-comments-${storyId}` }, feed);
}
