import PropTypes from 'prop-types';

import style from './style.module.scss';

function AvatarLarge({ src }) {
  return (
    <img alt="" className={style.avatar} height={60} src={src} width={60} />
  );
}

AvatarLarge.propTypes = {
  src: PropTypes.string.isRequired,
};

export default AvatarLarge;
