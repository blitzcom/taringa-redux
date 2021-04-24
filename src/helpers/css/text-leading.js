import PropTypes from 'prop-types';

export const TextLeading = {
  None: 'none',
  Tight: 'tight',
  Snug: 'snug',
  Normal: 'normal',
  Relaxed: 'relaxed',
  Loose: 'loose',
};

export const TextLeadingType = PropTypes.oneOf(Object.values(TextLeading));
