import PropTypes from 'prop-types';

export const TextColor = {
  Primary: 'primary',
  Secondary: 'secondary',
  Success: 'success',
  Danger: 'danger',
  Warning: 'warning',
  Muted: 'muted',
  Body: 'body',
};

export const TextColorType = PropTypes.oneOf(Object.values(TextColor));
