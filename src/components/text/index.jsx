import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { TextColorType } from 'src/helpers/css/text-color';
import { TextElement, TextElementType } from 'src/helpers/css/text-element';
import { TextLeading, TextLeadingType } from 'src/helpers/css/text-leading';
import { TextSize, TextSizeType } from 'src/helpers/css/text-size';

import style from './style.module.scss';

function Text({ children, className, color, element, leading, size, UNSAFE }) {
  const classes = classNames(style.text, className, style[`size-${size}`], {
    [style[`color-${color}`]]: color,
    [style[`leading-${leading}`]]: leading,
  });

  const defaultOptions = { className: classes };

  if (UNSAFE) {
    return React.createElement(element, {
      ...defaultOptions,
      dangerouslySetInnerHTML: { __html: UNSAFE },
    });
  }

  return React.createElement(element, defaultOptions, children);
}

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: TextColorType,
  element: TextElementType,
  leading: TextLeadingType,
  size: TextSizeType,
  UNSAFE: PropTypes.string,
};

Text.defaultProps = {
  children: null,
  className: null,
  color: null,
  element: TextElement.Paragraph,
  leading: TextLeading.None,
  size: TextSize.Base,
  UNSAFE: null,
};

export default Text;
