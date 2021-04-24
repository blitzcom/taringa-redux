import PropTypes from 'prop-types';

export const TextElement = {
  Paragraph: 'p',
  Inline: 'span',
  Title: 'h1',
  Subtitle: 'h2',
};

export const TextElementType = PropTypes.oneOf(Object.values(TextElement));
