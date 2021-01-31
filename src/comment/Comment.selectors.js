export function getComment(commentId) {
  return (state) => state.objects['comments'].entities[commentId];
}
