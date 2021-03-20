import { nanoid } from 'nanoid';
import { normalize, schema } from 'normalizr';
import marked from 'marked';

import getId from 'src/schemas/utils/get-id';

import { formatThubmanil, formatIdentity, formatAvatar } from './utils/knn';
import { owner } from './user';
import { stats } from './stats';

const state = new schema.Entity(
  'states',
  {},
  {
    idAttribute: (_, parent) => getId(parent),
    processStrategy: (value, root) => ({ ...value, id: root.id }),
  },
);

const channel = new schema.Entity(
  'channels',
  {
    stats,
    owner,
    state,
  },
  {
    idAttribute: (_, parent) => getId(parent),
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
  'stories',
  {
    stats,
    channel,
    owner,
    state,
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

      const entity = {
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

      if (rest.content) {
        Object.assign(entity, {
          content: rest.content.map((originalBlock) => {
            const block = { ...originalBlock, id: nanoid() };

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
        thumbnail: formatThubmanil(thumbnail?.url, '/article_background.svg'),
      });

      return entity;
    },
  },
);

export default function exec(data) {
  return normalize(data, item);
}
