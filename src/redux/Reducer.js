const initialState = {
  count: 0,
};
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.num };
    case "DECREMENT":
      return state.count--;
    default:
      return state;
  }
}
