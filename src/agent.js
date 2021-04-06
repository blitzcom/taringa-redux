/* eslint-disable import/prefer-default-export */

const USER_AGENT =
  'Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0';

const API_URL = 'https://api-user.taringa.net';

function toQuery(source) {
  return Object.entries(source)
    .map(([key, value]) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join('&');
}

function buildURL(pathname, params = {}) {
  let query = toQuery(params);

  if (query) {
    query = `?${query}`;
  }

  return `${API_URL}${pathname}${query}`;
}

async function get(pathname, params, options = {}) {
  try {
    const { timeout = 8000 } = options;
    const url = buildURL(pathname, params);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(url, {
      headers: {
        'User-Agent': USER_AGENT,
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const json = await response.json();

    return [json, response.status];
  } catch (error) {
    if (error.name === 'AbortError') {
      return [null, 504];
    }

    return [null, 500];
  }
}

export default {
  get,
};
