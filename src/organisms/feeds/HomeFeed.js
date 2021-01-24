import { useSelector, connect } from 'react-redux';

import Row from '@molecules/stories/Row';

function HomeFeed({ scope, name }) {
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

export default HomeFeed;
