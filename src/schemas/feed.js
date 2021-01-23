import { normalize, schema } from 'normalizr';

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

const item = new schema.Entity(
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

      return {
        ...rest,
        stats: {
          bookmarks,
          comments,
          downvotes,
          shares,
          upvotes,
          visits,
        },
      };
    },
  },
);

const feed = new schema.Entity('feeds', {
  items: [item],
});

export default function exec(data) {
  return normalize({ ...data, id: 'home' }, feed);
}
