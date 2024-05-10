import { GET_MUSIC } from "../actions";

const initialState = {
  content: [],
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MUSIC:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default songReducer;
