import PropTypes from 'prop-types';

import style from './replies.module.scss';

function Replies({ children }) {
  return <ul className={style.list}>{children}</ul>;
}

Replies.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Replies;
