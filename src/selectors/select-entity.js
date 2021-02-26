function selectEntity(state, space, name) {
  return state.entities[space][name];
}

export default selectEntity;
