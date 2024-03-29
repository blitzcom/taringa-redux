import PropTypes from 'prop-types';

import style from './style.module.scss';

function Thread({ children }) {
  return <li className={style.li}>{children}</li>;
}

Thread.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Thread;
