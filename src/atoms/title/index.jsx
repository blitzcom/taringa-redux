import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.scss';

function Title({ children, variant }) {
  const classes = classNames(style.title, {
    [style[variant]]: variant,
  });

  return <h1 className={classes}>{children}</h1>;
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['story', 'row']).isRequired,
};

export default Title;
