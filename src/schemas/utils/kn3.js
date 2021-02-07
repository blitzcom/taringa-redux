export const KN3_REGEX = /^https.*(t26|kn3)\.net(\/taringa\/)?.*$/;

export const KN3_FORMAT_REGEX = /^(https?.*(kn3|t26).*\/)(c_|rw_)?([0-9]+(x[0-9]+)?_)?([a-zA-Z0-9]+\.[a-z]+)$/;

export const DEFAULT_THUMBNAIL = '/article_background.svg';

/**
 * Tests if url image is from kn3 image service.
 * @param {string} url Image
 */
export function test(url) {
  return KN3_REGEX.test(url);
}

/**
 * Formats a kn3 url into different modes.
 * @param {*} url
 * @param {*} mode
 * @param {*} width
 * @param {*} height
 */
export function format(url, mode, width, height, fallback) {
  if (!url) {
    return fallback;
  }

  if (!test(url)) {
    return url;
  }

  if (!height && !width) {
    return url;
  }

  switch (mode) {
    case 'c':
      return url.replace(KN3_FORMAT_REGEX, `$1c_${width}x${height}_$6`);
    case 'r':
      return url.replace(KN3_FORMAT_REGEX, `$1${width}x${height}_$6`);
    case 'rw':
      return url.replace(KN3_FORMAT_REGEX, `$1rw_${width}_$6`);
    case 'o':
    default:
      return url.replace(KN3_FORMAT_REGEX, `$1$6`);
  }
}
