export function getReply(replyId) {
  return (state) => state.objects['replies'].entities[replyId];
}
