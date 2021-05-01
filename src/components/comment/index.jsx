import PropTypes from 'prop-types';

import Text from 'src/components/text';

import { TextColor } from 'src/helpers/css/text-color';
import { TextElement } from 'src/helpers/css/text-element';
import { TextLeading } from 'src/helpers/css/text-leading';
import { TextSize } from 'src/helpers/css/text-size';

import style from './style.module.scss';

function Comment({ avatar, created, user, body }) {
  return (
    <article className={style.commentable}>
      {avatar}
      <div className={style.details}>
        {user}
        <span> </span>
        <Text
          color={TextColor.Muted}
          element={TextElement.Inline}
          size={TextSize.Small}
        >
          {created}
        </Text>
        <Text leading={TextLeading.Snug} className={style.body}>
          {body || 'Unavailable comment'}
        </Text>
      </div>
    </article>
  );
}

Comment.propTypes = {
  avatar: PropTypes.node.isRequired,
  body: PropTypes.string,
  created: PropTypes.string.isRequired,
  user: PropTypes.node.isRequired,
};

Comment.defaultProps = {
  body: null,
};

export default Comment;
