const KNN_URL = 'https://media.taringa.net/knn';

function toBase64(url) {
  return btoa(url).replace(/=/g, '').replace(/\//g, '_');
}

function createFormat(preset) {
  function format(url, fallback) {
    if (!url) {
      return fallback;
    }

    return `${KNN_URL}/${preset}/${toBase64(url)}`;
  }

  return format;
}

export const formatGifThumbnail = createFormat('thumbGif:crop:150x115');
export const formatThubmanil = createFormat('crop:150x115');
export const formatIdentity = createFormat('identity');
export const formatAvatar = createFormat('crop:90x90');
