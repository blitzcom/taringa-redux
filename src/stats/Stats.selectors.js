export function getStats(entityId) {
  return (state) => state.objects['stats'].entities[entityId];
}
