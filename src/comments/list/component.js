import PropTypes from 'prop-types';

import style from './style.module.css';

function Comments({ items, component: Component }) {
  return (
    <section className={style.section}>
      <div className={style.header}>
        <h2 className={style.title}>Comments</h2>
      </div>

      <ul className={style.list}>
        {items.map((commentId) => (
          <Component key={commentId} commentId={commentId} />
        ))}
      </ul>
    </section>
  );
}

Comments.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Comments;
