import invariant from 'invariant';

import {
  DEFAULT_AVATAR,
  DEFAULT_BACKGROUND,
  DEFAULT_THUMBNAIL,
  KNN_URL,
} from './constants';

function toBase64(url) {
  return btoa(url).replace(/=/g, '').replace(/\//g, '_');
}

function createFormat(options = {}) {
  const { preset, fallback, gif = false } = options;

  invariant(typeof preset === 'string', `createFormat: invalid preset`);
  invariant(typeof fallback === 'string', `createFormat: invalid fallback url`);

  function format(url) {
    if (typeof url !== 'string' || url === '') {
      return fallback;
    }

    const finalPreset =
      gif && url.endsWith('.gif') ? `thumbGif:${preset}` : preset;

    return `${KNN_URL}/${finalPreset}/${toBase64(url)}`;
  }

  return format;
}

export const formatAvatar = createFormat({
  fallback: DEFAULT_AVATAR,
  gif: true,
  preset: 'crop:90x90',
});

export const formatThumbnail = createFormat({
  fallback: DEFAULT_THUMBNAIL,
  gif: true,
  preset: 'crop:150x115',
});

export const formatBackground = createFormat({
  fallback: DEFAULT_BACKGROUND,
  gif: true,
  preset: 'fit:550',
});

export const formatIdentity = createFormat({
  fallback: DEFAULT_THUMBNAIL,
  preset: 'identity',
});
