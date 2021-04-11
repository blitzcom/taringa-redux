import { normalize, schema } from 'normalizr';

import { comment } from './comment';

const conversation = new schema.Entity('conversations', {
  items: [comment],
});

export default function normalizeConversation(data, storyId) {
  return normalize({ ...data, id: storyId }, conversation);
}
