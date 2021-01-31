export function getCommentStream(storyId) {
  return (state) => state.streams['comments'].entities[storyId];
}
