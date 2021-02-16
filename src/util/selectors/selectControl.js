function selectControl(state, source, target) {
  return state.controls[source]?.[target];
}

export default selectControl;
