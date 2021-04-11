import { nanoid } from 'nanoid';
import marked from 'marked';

import { formatThubmanil, formatIdentity } from 'src/schemas/utils/knn';

function contentMapper(content) {
  if (typeof content === 'undefined') {
    return null;
  }

  return content.map((originalBlock) => {
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
  });
}

export default function storiesMapper(current, value) {
  const { content, thumbnail, stats, state: _, ...rest } = value;
  const [firstImage] = value.summary.images.slice;

  const state = {
    ...current,
    ...rest,
    thumbnail: formatThubmanil(
      thumbnail ?? firstImage?.url,
      '/article_background.svg',
    ),
  };

  if (content) {
    Object.assign(state, {
      content: contentMapper(content),
    });
  }

  return state;
}