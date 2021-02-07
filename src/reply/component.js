import PropTypes from 'prop-types';

import style from './style.module.css';

function Reply({ children }) {
  return <li className={style.reply}>{children}</li>;
}

Reply.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Reply;
