import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.scss';

function Paper({ children, flat }) {
  return (
    <section className={classNames(style.paper, { [style.flat]: flat })}>
      {children}
    </section>
  );
}

Paper.propTypes = {
  children: PropTypes.node.isRequired,
  flat: PropTypes.bool,
};

Paper.defaultProps = {
  flat: false,
};

export default Paper;
