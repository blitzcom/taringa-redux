import PropTypes from 'prop-types';

import style from './style.module.css';

function ArticlesList({ items, component: Component }) {
  return (
    <section className={style.list}>
      {items.map((id) => (
        <Component key={id} articleId={id} />
      ))}
    </section>
  );
}

ArticlesList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  component: PropTypes.elementType.isRequired,
};

export default ArticlesList;
