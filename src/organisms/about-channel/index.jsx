import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import selectControl from 'src/selectors/select-control';
import selectEntity from 'src/selectors/select-entity';

import AvatarLarge from 'src/atoms/avatar-large';
import Box from 'src/atoms/box';
import Button from 'src/atoms/button';
import Spinner from 'src/atoms/spinner';
import Text from 'src/atoms/text';
import Title from 'src/atoms/title';

import About from 'src/molecules/about';

export function AboutChannel({
  background,
  category,
  description,
  thumbnail,
  title,
}) {
  return (
    <About background={background} avatar={<AvatarLarge src={thumbnail} />}>
      <Box display="flex" margin="16px 0 0" justify="space-between">
        <div>
          <Title size="large">{title}</Title>
          <Text variant="secondary">{category}</Text>
        </div>

        <div>
          <Button onClick={() => {}}>Join</Button>
        </div>
      </Box>

      <Box margin="16px 0 0">
        <Text>{description}</Text>
      </Box>
    </About>
  );
}

AboutChannel.propTypes = {
  background: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

function AboutChannelContainer({ channelId }) {
  const control = useSelector((state) =>
    selectControl(state, 'channels', channelId),
  );

  const channel = useSelector((state) =>
    selectEntity(state, 'channels', channelId),
  );

  if (control?.status === 'loaded') {
    return (
      <AboutChannel
        background={channel.background}
        category={channel.category}
        description={channel.description}
        thumbnail={channel.thumbnail}
        title={channel.title}
      />
    );
  }

  return <Spinner />;
}

AboutChannelContainer.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default AboutChannelContainer;
