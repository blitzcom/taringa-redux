export function getStream(streamName, entityId) {
  return (state) => state.streams[streamName].entities[entityId];
}
