import PropTypes from 'prop-types';

export const TextSize = {
  ExtraSmall: 'extra-small',
  Small: 'small',
  Base: 'base',
  Large: 'large',
  ExtraLarge: 'extra-large',
  ExtraLarge2x: 'extra-large-2x',
};

export const TextSizeType = PropTypes.oneOf(Object.values(TextSize));
