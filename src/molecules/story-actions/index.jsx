import PropTypes from 'prop-types';

import Box from 'src/atoms/box';
import ButtonAction from 'src/atoms/button-action';
import ButtonVoting from 'src/atoms/button-voting';

function StoryActions({ upvotes, downvotes, comments, shares, bookmarks }) {
  return (
    <Box display="flex" margin="8px 0 0">
      <ButtonVoting upvotes={upvotes} downvotes={downvotes} />
      <ButtonAction
        count={comments}
        singular="Comentario"
        plural="Comentarios"
      />
      <ButtonAction count={shares} singular="Compartido" plural="Compartidos" />
      <ButtonAction count={bookmarks} singular="Favorito" plural="Favoritos" />
    </Box>
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
