import PropTypes from 'prop-types';
import classNames from 'classnames';

import { AvatarSize, AvatarSizeMapper, AvatarSizeValues } from './constants';

import style from './style.module.scss';

function Avatar({ rounded, size, src }) {
  const numberSize = AvatarSizeMapper[size];

  return (
    <img
      alt=""
      className={classNames(
        style.avatar,
        style[size],
        rounded && style.rounded,
      )}
      height={numberSize}
      loading="lazy"
      src={src}
      width={numberSize}
    />
  );
}

Avatar.propTypes = {
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(AvatarSizeValues),
  src: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  rounded: false,
  size: AvatarSize.Regular,
};

export default Avatar;
