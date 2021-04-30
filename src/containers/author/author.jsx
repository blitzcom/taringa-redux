import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Author from 'src/components/author';
import Text from 'src/components/text';

import LinkChannel from 'src/containers/link-channel';

import { TextColor } from 'src/helpers/css/text-color';
import { TextElement } from 'src/helpers/css/text-element';

import selectEntity from 'src/selectors/select-entity';

function AuthorContainer({ storyId }) {
  const story = useSelector((state) => selectEntity(state, 'stories', storyId));

  const user = useSelector((state) =>
    selectEntity(state, 'users', story.owner),
  );

  return (
    <Author
      avatar={user.avatar}
      fullname={user.fullname}
      href={user.url}
      meta={
        <Text element={TextElement.Inline} color={TextColor.Secondary}>
          Creado {story.displayCreated}
          <span> · </span>
          <LinkChannel name={story.channel} />
        </Text>
      }
      username={user.username}
    />
  );
}

AuthorContainer.propTypes = {
  storyId: PropTypes.string.isRequired,
};

AuthorContainer.defaultProps = {};

export default AuthorContainer;
