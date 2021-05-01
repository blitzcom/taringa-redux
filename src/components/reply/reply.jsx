import PropTypes from 'prop-types';

import style from './reply.module.scss';

function Reply({ children }) {
  return <li className={style.li}>{children}</li>;
}

Reply.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Reply;
