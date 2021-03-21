import { memo } from 'react';
import PropTypes from 'prop-types';

import style from './style.module.scss';

function Image({ src, width, height, alt, widthStyle, paddingStyle }) {
  return (
    <figure className={style.figure}>
      <div className={style.width} style={widthStyle}>
        <div className={style.background}>
          <div style={paddingStyle}>
            <img
              alt={alt}
              className={style.image}
              height={height}
              loading="lazy"
              src={src}
              width={width}
            />
          </div>
        </div>
      </div>
    </figure>
  );
}

Image.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  widthStyle: PropTypes.shape({
    maxWidth: PropTypes.number,
  }).isRequired,
  paddingStyle: PropTypes.shape({
    paddingStyle: PropTypes.string,
  }).isRequired,
};

Image.defaultProps = {
  alt: '',
  height: 250,
  width: 250,
};

export default memo(Image);
