import PropTypes from 'prop-types';

import style from './style.module.scss';

function Text({ children }) {
  return <p className={style.text}>{children}</p>;
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
