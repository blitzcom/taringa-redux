import PropTypes from 'prop-types';

import style from './style.module.scss';

function Thumbnail({ src }) {
  return (
    <figure className={style.figure}>
      <img
        alt=""
        className={style.img}
        height={80}
        loading="lazy"
        src={src}
        width={120}
      />
    </figure>
  );
}

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Thumbnail;
