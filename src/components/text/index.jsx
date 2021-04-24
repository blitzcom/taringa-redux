import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ColorType } from 'src/helpers/css/color';
import { Size, SizeType } from 'src/helpers/css/size';

import style from './style.module.scss';

function Text({ children, color, size }) {
  return (
    <span className={classNames(style.text, style[color], style[size])}>
      {children}
    </span>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: ColorType,
  size: SizeType,
};

Text.defaultProps = {
  color: null,
  size: Size.Base,
};

export default Text;
