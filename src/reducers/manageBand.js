let id = 0
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++;
      const band = Object.assign({}, action.todo, {id: id});
      return { bands: state.bands.concat(action.band) };
    default:
      return state;
  }
};
