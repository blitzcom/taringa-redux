import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Spinner from 'src/components/atoms/spinner';
import Void from 'src/atoms/void';

import Blocks from 'src/components/blocks';
import LinkUser from 'src/components/link-user';
import LinkChannel from 'src/components/link-channel';

import selectControl from 'src/selectors/select-control';
import selectEntity from 'src/selectors/select-entity';

import summaryControlStatus from 'src/reducers/constants/summary-control-status';

import Story from 'src/components/story';

function StoryContainer({ storyId }) {
  const story = useSelector((state) => selectEntity(state, 'stories', storyId));

  const control = useSelector((state) =>
    selectControl(state, 'stories', storyId),
  );

  if (
    typeof control === 'undefined' ||
    control.status === summaryControlStatus.PreLoading
  ) {
    return <Spinner />;
  }

  if (
    control.status === summaryControlStatus.Upgraded ||
    control.status === summaryControlStatus.Upgrading
  ) {
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
        {control.status === summaryControlStatus.Upgrading && (
          <Void>
            <Spinner />
          </Void>
        )}

        {control.status === summaryControlStatus.Upgraded && (
          <Blocks blocks={story.content} />
        )}
      </Story>
    );
  }

  return null;
}

StoryContainer.propTypes = {
  storyId: PropTypes.string.isRequired,
};

export default StoryContainer;
