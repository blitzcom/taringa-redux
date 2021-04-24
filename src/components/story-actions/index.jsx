import PropTypes from 'prop-types';

import ButtonAction from 'src/components/button-action';
import ButtonVoting from 'src/components/button-voting';

import style from './story-actions.module.scss';

function StoryActions({ upvotes, downvotes, comments, shares, bookmarks }) {
  return (
    <div className={style.actions}>
      <ButtonVoting upvotes={upvotes} downvotes={downvotes} />
      <ButtonAction
        count={comments}
        singular="Comentario"
        plural="Comentarios"
      />
      <ButtonAction count={shares} singular="Compartido" plural="Compartidos" />
      <ButtonAction count={bookmarks} singular="Favorito" plural="Favoritos" />
    </div>
  );
}

StoryActions.propTypes = {
  bookmarks: PropTypes.number,
  comments: PropTypes.number,
  downvotes: PropTypes.number,
  shares: PropTypes.number,
  upvotes: PropTypes.number,
};

StoryActions.defaultProps = {
  bookmarks: 0,
  comments: 0,
  downvotes: 0,
  shares: 0,
  upvotes: 0,
};

export default StoryActions;
