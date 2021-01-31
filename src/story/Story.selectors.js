export function getStory(storyId) {
  return (state) => state.objects['items'].entities[storyId];
}
