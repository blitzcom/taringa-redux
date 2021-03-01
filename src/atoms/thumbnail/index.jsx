import PropTypes from 'prop-types';

import style from './style.module.css';

function Thumbnail({ src }) {
  return (
    <figure className={style.figure}>
      <img
        alt=""
        className={style.img}
        height={90}
        loading="lazy"
        src={src}
        width={90}
      />
    </figure>
  );
}

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Thumbnail;
