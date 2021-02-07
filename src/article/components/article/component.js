import PropTypes from 'prop-types';

import style from './style.module.css';

function Article({ title, subtitle, meta, thumbnail }) {
  return (
    <article className={style.article}>
      <div className={style.meta}>
        <small>{meta}</small>
      </div>

      <div className={style.content}>
        <div className={style.details}>
          <header>
            <h1 className={style.title}>{title}</h1>
          </header>

          <p className={style.subtitle} title={subtitle}>
            {subtitle}
          </p>

          <footer className={style.footer}>
            Like &bull; Comments &bull; Favorites
          </footer>
        </div>

        <figure className={style.figure}>
          <img src={thumbnail} alt="" width={90} height={90} loading="lazy" />
        </figure>
      </div>
    </article>
  );
}

Article.propTypes = {
  meta: PropTypes.node.isRequired,
  subtitle: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  title: PropTypes.node.isRequired,
};

Article.defaultProps = {
  thumbnail: '/article_background.svg',
};

export default Article;
