import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Blocks from 'src/molecules/blocks';
import Channel from 'src/channel/components/Channel';

import User from 'src/user/components/User';

import selectEntity from 'src/selectors/select-entity';

import Story from './component';

function StoryContainer({ storyId }) {
  const story = useSelector((state) => selectEntity(state, 'stories', storyId));

  return (
    <Story
      title={story.title}
      meta={
        <p>
          <Channel channelId={story.channel} />
          <span> • </span>
          Post by <User userId={story.owner} />
        </p>
      }
    >
      <Blocks blocks={story.content} />
    </Story>
  );
}

StoryContainer.propTypes = {
  storyId: PropTypes.string.isRequired,
};

export default StoryContainer;
