export const GET_MUSIC = "GET_MUSIC";
export const SELECTED_SONG = "SELECTED_SONG";

export const getMusicAction = (artistName) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName
      );
      if (response.ok) {
        let songs = await response.json();
        dispatch({ type: GET_MUSIC, payload: songs });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};