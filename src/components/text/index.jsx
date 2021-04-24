import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { TextColorType } from 'src/helpers/css/text-color';
import { TextElement, TextElementType } from 'src/helpers/css/text-element';
import { TextLeading, TextLeadingType } from 'src/helpers/css/text-leading';
import { TextSize, TextSizeType } from 'src/helpers/css/text-size';

import style from './style.module.scss';

function Text({ children, className, color, element, leading, size }) {
  const classes = classNames(style.text, className, style[`size-${size}`], {
    [style[`color-${color}`]]: color,
    [style[`leading-${leading}`]]: leading,
  });

  return React.createElement(element, { className: classes }, children);
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: TextColorType,
  element: TextElementType,
  leading: TextLeadingType,
  size: TextSizeType,
};

Text.defaultProps = {
  className: null,
  color: null,
  element: TextElement.Paragraph,
  leading: TextLeading.None,
  size: TextSize.Base,
};

export default Text;
