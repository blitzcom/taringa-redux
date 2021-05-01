import marked from 'marked';

const renderer = {
  html(text) {
    const match = text.match(/<mention user="(?<username>.*)" \/>/);

    if (match) {
      const { username } = match.groups;
      return `<a href="/u/${username}" data-target="router"><b>@${username}</b></a>`;
    }

    return text;
  },
  link(href, _, text) {
    return `<a href="${href}" target="_blank">${text}</a>`;
  },
};

marked.use({ renderer });

export function inlineMarkdownMapper(text) {
  if (typeof text !== 'string' || text.length === 0) {
    return null;
  }

  return marked.parseInline(text);
}

export function markdownMapper(text) {
  if (typeof text !== 'string' || text.length === 0) {
    return null;
  }

  return marked(text, { headerIds: false });
}
