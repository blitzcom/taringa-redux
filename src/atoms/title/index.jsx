import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.css';

function Title({ children, variant }) {
  const classes = classNames(style.title, {
    [style[variant]]: variant,
  });

  return <h1 className={classes}>{children}</h1>;
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['article']),
};

Title.defaultProps = {
  variant: null,
};

export default Title;
