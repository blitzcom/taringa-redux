import PropTypes from 'prop-types';
import { memo } from 'react';

function Box({ children, display, padding, margin, width }) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          ${display ? `display: ${display};` : ''}
          ${padding ? `padding: ${padding};` : ''}
          ${margin ? `margin: ${margin};` : ''}
          ${width ? `width: ${width};` : ''}
        }
      `}</style>
    </div>
  );
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
  display: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
};

Box.defaultProps = {
  display: null,
  padding: null,
  margin: null,
  width: null,
};

export default memo(Box);
