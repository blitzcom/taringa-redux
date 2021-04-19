import PropTypes from 'prop-types';

import style from './style.module.scss';

function Clamp({ children }) {
  return <div className={style.clamp}>{children}</div>;
}

Clamp.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Clamp;
