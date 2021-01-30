import { useSelector } from 'react-redux';

import Blocks from '@molecules/Blocks';

function Story() {
  const control = useSelector((state) => state.pages.channel.slug.story);

  const story = useSelector(
    (state) => state.objects.items.entities[control.storyId],
  );

  if (control.status === 'fetching') {
    return <p>Fetching story</p>;
  }

  if (control.status === 'error') {
    return <p>Error {control.error}</p>;
  }

  return (
    <article>
      <h1>{story.title}</h1>
      <Blocks blocks={story.content} />
    </article>
  );
}

export default Story;
