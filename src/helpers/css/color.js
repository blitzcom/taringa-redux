import PropTypes from 'prop-types';

export const Color = {
  Primary: 'primary',
  Secondary: 'secondary',
  Success: 'success',
  Danger: 'danger',
  Warning: 'warning',
  Muted: 'muted',
  Body: 'body',
};

export const ColorType = PropTypes.oneOf(Object.values(Color));
