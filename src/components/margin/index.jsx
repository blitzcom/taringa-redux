import PropTypes from 'prop-types';
import React from 'react';

export const MarginSize = {
  None: 0,
  Tiny: 4,
  Small: 8,
  Regular: 16,
  Large: 24,
  Big: 32,
};

function Margin({ children, bottom, inline, left, right, top }) {
  return React.createElement(
    inline ? 'span' : 'div',
    {
      style: {
        display: inline ? 'inline-block' : 'block',
        marginBottom: bottom,
        marginLeft: left,
        marginRight: right,
        marginTop: top,
      },
    },
    children,
  );
}

const SizeValues = Object.values(MarginSize);

Margin.propTypes = {
  bottom: PropTypes.oneOf(SizeValues),
  children: PropTypes.node,
  inline: PropTypes.bool,
  left: PropTypes.oneOf(SizeValues),
  right: PropTypes.oneOf(SizeValues),
  top: PropTypes.oneOf(SizeValues),
};

Margin.defaultProps = {
  bottom: MarginSize.s00,
  children: null,
  inline: false,
  left: MarginSize.s00,
  right: MarginSize.s00,
  top: MarginSize.s00,
};

export default React.memo(Margin);
