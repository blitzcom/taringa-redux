const KNN_URL = 'https://media.taringa.net/knn';

function toBase64(url) {
  return btoa(url).replace(/=/g, '').replace(/\//g, '_');
}

function createFormat(preset, withGif = false) {
  function format(url, fallback) {
    if (typeof url !== 'string' || url === '') {
      return fallback;
    }

    const finalPreset =
      withGif && url.endsWith('.gif') ? `thumbGif:${preset}` : preset;

    return `${KNN_URL}/${finalPreset}/${toBase64(url)}`;
  }

  return format;
}

export const formatAvatar = createFormat('crop:90x90', true);
export const formatThumbnail = createFormat('crop:150x115', true);
export const formatBackground = createFormat('fit:550', true);
export const formatIdentity = createFormat('identity');
