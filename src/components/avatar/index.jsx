import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  AvatarSize,
  AvatarSizeMapper,
  AvatarSizeType,
} from 'src/helpers/css/avatar-size';

import style from './style.module.scss';

function Avatar({ alt, className, rounded, shadow, size, src }) {
  const numberSize = AvatarSizeMapper[size];

  const classes = classNames(style.avatar, style[size], className, {
    [style.shadow]: shadow,
    [style.rounded]: rounded,
  });

  return (
    <img
      alt={alt}
      className={classes}
      height={numberSize}
      loading="lazy"
      src={src}
      width={numberSize}
    />
  );
}

Avatar.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  rounded: PropTypes.bool,
  shadow: PropTypes.bool,
  size: AvatarSizeType,
  src: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  alt: '',
  className: null,
  rounded: false,
  shadow: false,
  size: AvatarSize.Base,
};

export default Avatar;
