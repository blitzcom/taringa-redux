import PropTypes from 'prop-types';

import Box from 'src/atoms/box';
import ButtonAction from 'src/atoms/button-action';

function StoryActions({ comments, shares, bookmarks }) {
  return (
    <Box margin="8px 0 0">
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
  comments: PropTypes.number,
  shares: PropTypes.number,
  bookmarks: PropTypes.number,
};

StoryActions.defaultProps = {
  comments: 0,
  shares: 0,
  bookmarks: 0,
};

export default StoryActions;
