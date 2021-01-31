export function getReplyStream(replyId) {
  return (state) => state.streams['replies'].entities[replyId];
}
