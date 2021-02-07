import PropTypes from 'prop-types';

import style from './style.module.css';

function RepliesContainer({ items, component: Component }) {
  return (
    <ul className={style.list}>
      {items.map((replyId) => (
        <Component key={replyId} replyId={replyId} />
      ))}
    </ul>
  );
}

RepliesContainer.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RepliesContainer;
