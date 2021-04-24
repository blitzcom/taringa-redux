import PropTypes from 'prop-types';

export const Size = {
  ExtraSmall: 'extra-small',
  Small: 'small',
  Base: 'base',
  Large: 'large',
  ExtraLarge: 'extra-large',
};

export const SizeType = PropTypes.oneOf(Object.values(Size));
