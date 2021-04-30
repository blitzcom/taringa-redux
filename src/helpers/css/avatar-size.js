import PropTypes from 'prop-types';

export const AvatarSize = {
  Base: 'base',
  Large: 'large',
  ExtraLarge: 'extra-large',
};

export const AvatarSizeType = PropTypes.oneOf(Object.values(AvatarSize));

export const AvatarSizeMapper = {
  [AvatarSize.Base]: 28,
  [AvatarSize.Large]: 48,
  [AvatarSize.ExtraLarge]: 90,
};
