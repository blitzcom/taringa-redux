import PropTypes from 'prop-types';

import Text from 'src/components/text';
import { TextLeading } from 'src/helpers/css/text-leading';

import style from './style.module.scss';

function Comment({ avatar, user, body }) {
  return (
    <article className={style.commentable}>
      {avatar}

      <div className={style.details}>
        {user}

        <Text leading={TextLeading.Snug} className={style.body}>
          {body || 'Unavailable comment'}
        </Text>
      </div>
    </article>
  );
}

Comment.propTypes = {
  avatar: PropTypes.node.isRequired,
  user: PropTypes.node.isRequired,
  body: PropTypes.string,
};

Comment.defaultProps = {
  body: null,
};

export default Comment;
