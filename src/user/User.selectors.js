export function getUser(userId) {
  return (state) => state.objects['users'].entities[userId];
}
