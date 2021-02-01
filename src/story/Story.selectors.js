import { getChannel } from 'src/channel/Channel.selectors';

export function getStory(storyId) {
  return (state) => state.objects['items'].entities[storyId];
}

export function getSlug(storyId) {
  return (state) => {
    const story = getStory(storyId)(state);
    const channel = getChannel(story.channel)(state);

    return `/c/${channel.name}/${story.slug}`;
  };
}
