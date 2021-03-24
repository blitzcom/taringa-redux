import PropTypes from 'prop-types';

import style from './style.module.scss';

function Padding({ children }) {
  return <div className={style.padding}>{children}</div>;
}

Padding.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Padding;
