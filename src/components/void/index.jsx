import PropTypes from 'prop-types';

import style from './style.module.scss';

function Void({ children }) {
  return <div className={style.void}>{children}</div>;
}

Void.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Void;
