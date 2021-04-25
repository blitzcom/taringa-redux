import PropTypes from 'prop-types';

export const AvatarSize = {
  Base: 'base',
  ExtraLarge: 'extra-large',
};

export const AvatarSizeType = PropTypes.oneOf(Object.values(AvatarSize));

export const AvatarSizeMapper = {
  [AvatarSize.Base]: 28,
  [AvatarSize.ExtraLarge]: 90,
};
