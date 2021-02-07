import PropTypes from 'prop-types';

import style from './style.module.css';

function Story({ title, meta, children }) {
  return (
    <article className={style.article}>
      {title && <h1 className={style.title}>{title}</h1>}

      {meta}

      {children}
    </article>
  );
}

Story.propTypes = {
  title: PropTypes.string,
  meta: PropTypes.node,
  children: PropTypes.node,
};

export default Story;
