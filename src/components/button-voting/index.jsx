import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '@mdi/react';
import { mdiArrowUpThick, mdiArrowDownThick } from '@mdi/js';

import style from './style.module.scss';

function ButtonVoting({ upvotes, downvotes, vote, onUpvote, onDownvote }) {
  return (
    <div className={style.voting}>
      <button
        type="button"
        className={classNames(style.button, style.up, vote > 0 && style.active)}
        onClick={onUpvote}
      >
        <Icon className={style.icon} path={mdiArrowUpThick} size="16px" />
        {upvotes > 0 && upvotes}
      </button>

      <button
        type="button"
        className={classNames(
          style.button,
          style.down,
          vote < 0 && style.active,
        )}
        onClick={onDownvote}
      >
        {downvotes > 0 && downvotes}
        <Icon className={style.icon} path={mdiArrowDownThick} size="16px" />
      </button>
    </div>
  );
}

ButtonVoting.propTypes = {
  upvotes: PropTypes.number,
  downvotes: PropTypes.number,
  vote: PropTypes.number,
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func,
};

ButtonVoting.defaultProps = {
  upvotes: 0,
  downvotes: 0,
  vote: 0,
  onUpvote: null,
  onDownvote: null,
};

export default ButtonVoting;
