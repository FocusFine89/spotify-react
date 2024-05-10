import { LIKE_SONG, REMOVE_SONG } from "../actions";

const initialState = {
  content: [],
};

const likedSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_SONG:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_SONG:
      return {
        ...state,
        content: state.content.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default likedSongReducer;
