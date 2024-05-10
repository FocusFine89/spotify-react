import { combineReducers, configureStore } from "@reduxjs/toolkit";
import songReducer from "../reducers/songReducer";
import selectedSongReducer from "../reducers/selectedSongReducer";
import likedSongReducer from "../reducers/likedSongReducer";

const rootReducer = combineReducers({
  songList: songReducer,
  selected: selectedSongReducer,
  likedSong: likedSongReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
