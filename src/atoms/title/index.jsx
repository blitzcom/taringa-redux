import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.scss';

function Title({ children, size }) {
  const classes = classNames(style.title, style[size]);

  return <h1 className={classes}>{children}</h1>;
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['medium', 'large', 'extra-large']),
};

Title.defaultProps = {
  size: 'medium',
};

export default Title;
