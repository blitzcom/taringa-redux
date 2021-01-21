import { useSelector, connect } from 'react-redux';

import Row from '@molecules/stories/Row';

function HomeFeed() {
  const control = useSelector((state) => state.controls.feeds.home);
  const feed = useSelector((state) => state.entities.feeds?.home);

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

export default HomeFeed;
