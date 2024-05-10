import { combineReducers, configureStore } from "@reduxjs/toolkit";
import songReducer from "../reducers/songReducer";
import selectedSongReducer from "../reducers/selectedSongReducer";

const rootReducer = combineReducers({
  songList: songReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
