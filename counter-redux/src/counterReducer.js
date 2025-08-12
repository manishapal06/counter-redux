import { INCREMENT, DECREMENT, RESET } from "./action";

const initState = {
  count: 0,
  theme: true
};

export const counterReducerFn = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return initState;
    default:
      return state;
  }
};
