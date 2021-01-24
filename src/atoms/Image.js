import PropTypes from 'prop-types';

function Image({ src, width, height, alt }) {
  return (
    <img src={src} alt={alt} width={width} height={height} loading="lazy" />
  );
}

Image.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
};

Image.defaultProps = {
  alt: '',
  height: 250,
  width: 250,
};

export default Image;
