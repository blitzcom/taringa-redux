import { normalize, schema } from 'normalizr';
import marked from 'marked';

import { stats } from 'src/stats/Stats.schema';

import { owner } from './user';
import { formatThubmanil, formatIdentity, formatAvatar } from './utils/knn';

const state = new schema.Entity(
  'states',
  {},
  {
    idAttribute: (_, parent) => parent.name,
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
    idAttribute: (value) => value.name,
    processStrategy(value) {
      const { stories, subscribers, thumbnail, background, ...rest } = value;

      return {
        ...rest,
        thumbnail: formatAvatar(thumbnail),
        background: formatIdentity(background),
        stats: {
          stories,
          subscribers,
        },
      };
    },
  },
);

export function channelNormalize(data) {
  return normalize(data, channel);
}

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

            if (block.type === 'image') {
              const { url, width, height } = block;
              const defaultWith = width || 550;
              const defaultHeight = height || 500;

              block.url = formatIdentity(url);

              block.widthStyle = { maxWidth: defaultWith };

              block.paddingStyle = {
                paddingBottom: `${(defaultHeight / defaultWith) * 100}%`,
              };

              block.width = defaultWith;
              block.height = defaultHeight;
            }

            return block;
          }),
        });
      }

      const [thumbnail] = rest.summary.images.slice;

      Object.assign(entity, {
        thumbnail: formatThubmanil(thumbnail?.url),
      });

      return entity;
    },
  },
);

export default function exec(data) {
  return normalize(data, item);
}
