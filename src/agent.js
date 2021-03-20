/* eslint-disable import/prefer-default-export */
import superagent from 'superagent';

const API_URL = 'https://api-user.taringa.net';

function toQuery(source) {
  return Object.entries(source)
    .map(([key, value]) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join('&');
}

export function get(pathname, options = {}) {
  let query = toQuery(options);

  if (query) {
    query = `?${query}`;
  }

  return superagent.get(`${API_URL}/${pathname}${query}`);
}
