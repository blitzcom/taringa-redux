import { normalize, schema } from 'normalizr';
import marked from 'marked';

const stats = new schema.Entity(
  'stats',
  {},
  {
    idAttribute: (_, parent) => parent.id,
    processStrategy: (value, root) => ({ ...value, id: root.id }),
  },
);

const owner = new schema.Entity('users', {});

const state = new schema.Entity(
  'states',
  {},
  {
    idAttribute: (_, parent) => parent.id,
    processStrategy: (value, root) => ({ ...value, id: root.id }),
  },
);

const channel = new schema.Entity(
  'channels',
  {
    stats: stats,
    owner: owner,
    state: state,
  },
  {
    processStrategy(value) {
      const { stories, subscribers, ...rest } = value;

      return {
        ...rest,
        stats: {
          stories,
          subscribers,
        },
      };
    },
  },
);

export const item = new schema.Entity(
  'items',
  {
    stats: stats,
    channel: channel,
    owner: owner,
    state: state,
  },
  {
    processStrategy(value) {
      const {
        bookmarks,
        comments,
        downvotes,
        shares,
        upvotes,
        visits,
        ...rest
      } = value;

      const entity = Object.assign({}, rest, {
        stats: {
          bookmarks,
          comments,
          downvotes,
          shares,
          upvotes,
          visits,
        },
      });

      if (rest.content) {
        Object.assign(entity, {
          content: rest.content.map((block) => {
            if (block.type === 'markdown') {
              block.body = marked(block.body, { headerIds: false });
            }

            return block;
          }),
        });
      }

      return entity;
    },
  },
);

export default function exec(data) {
  return normalize(data, item);
}
