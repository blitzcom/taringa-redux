import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Row from '@molecules/stories/Row';

function HomeFeed({ name, scope }) {
  const control = useSelector((state) => state.pages[scope][name]);
  const feed = useSelector((state) => state.objects.feeds.entities[name]);

  if (control.status === 'fetching') {
    return <div>Fetching</div>;
  }

  if (control.status === 'failing') {
    return <div>Error: {control.error}</div>;
  }

  return (
    <div>
      {feed.items.map((id) => (
        <Row key={id} id={id} />
      ))}
    </div>
  );
}

HomeFeed.propTypes = {
  name: PropTypes.string.isRequired,
  scope: PropTypes.string.isRequired,
};

export default HomeFeed;
