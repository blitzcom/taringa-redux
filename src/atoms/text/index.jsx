import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.scss';

function Text({ children, truncate }) {
  return (
    <p className={classNames(style.text, { [style.truncate]: truncate })}>
      {children}
    </p>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  truncate: PropTypes.bool,
};

Text.defaultProps = {
  truncate: false,
};

export default Text;
