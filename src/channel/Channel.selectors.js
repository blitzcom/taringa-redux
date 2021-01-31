export function getChannel(channelId) {
  return (state) => state.objects['channels'].entities[channelId];
}
