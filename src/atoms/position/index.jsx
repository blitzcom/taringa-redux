import PropTypes from 'prop-types';

function Position({ children, to: position, top, left, bottom, right }) {
  return <div style={{ position, top, left, bottom, right }}>{children}</div>;
}

Position.propTypes = {
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node.isRequired,
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  to: PropTypes.oneOf(['relative', 'absolute']).isRequired,
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Position.defaultProps = {
  bottom: 'auto',
  left: 'auto',
  right: 'auto',
  top: 'auto',
};

export default Position;
