import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Blocks from 'src/molecules/Blocks';

import User from 'src/user/components/User';

import { getStory } from 'src/story/Story.selectors';

function Story({ storyId }) {
  const story = useSelector(getStory(storyId));

  return (
    <article>
      <h1>{story.title}</h1>

      <p>
        Post by <User userId={story.owner} />
      </p>

      <Blocks blocks={story.content} />
    </article>
  );
}

Story.propTypes = {
  storyId: PropTypes.string.isRequired,
};

export default Story;
