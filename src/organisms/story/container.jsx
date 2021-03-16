import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Blocks from 'src/molecules/blocks';
import LinkUser from 'src/molecules/link-user';
import LinkChannel from 'src/molecules/link-channel';

import Story from 'src/organisms/story';
import selectControl from 'src/selectors/select-control';

import selectEntity from 'src/selectors/select-entity';

function StoryContainer({ storyId }) {
  const story = useSelector((state) => selectEntity(state, 'stories', storyId));

  const control = useSelector((state) =>
    selectControl(state, 'stories', storyId),
  );

  if (control?.status === 'loaded') {
    return (
      <Story
        title={story.title}
        meta={
          <p>
            Posted by <LinkUser username={story.owner} />
            <span> in </span>
            <LinkChannel name={story.channel} />
          </p>
        }
      >
        {story.type === 'story' && <Blocks blocks={story.content} />}
      </Story>
    );
  }

  return null;
}

StoryContainer.propTypes = {
  storyId: PropTypes.string.isRequired,
};

export default StoryContainer;
