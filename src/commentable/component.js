import PropTypes from 'prop-types';

import style from './style.module.css';

function Commentable({ avatar, body, owner }) {
  return (
    <article className={style.commentable}>
      {avatar}

      <div className={style.details}>
        <div>{owner}</div>

        <p className={style.body}>{body || 'Unavailable comment'}</p>
      </div>
    </article>
  );
}

Commentable.propTypes = {
  avatar: PropTypes.node,
  body: PropTypes.string,
  owner: PropTypes.node.isRequired,
};

export default Commentable;
