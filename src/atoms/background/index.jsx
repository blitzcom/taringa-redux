import PropTypes from 'prop-types';

import style from './style.module.scss';

function Background({ src }) {
  return (
    <figure className={style.figure}>
      <img alt="" className={style.img} height={120} src={src} width={550} />
    </figure>
  );
}

Background.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Background;
