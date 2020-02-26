const axios = require("axios");

export const SHORT_URL = "SHORT_URL";
export const SET_ERROR = "SET_ERROR";

export const shortUrl = dataUrl => ({ type: SHORT_URL, payload: dataUrl });
export const setError = error => ({ type: SET_ERROR, payload: error });

export const requestShortUrl = url => async dispatch => {
  try {
    const response = await axios.post("/link", url);
    const data = response.data;
    dispatch(shortUrl(data));
  } catch (e) {
    console.log(e.response.data.error[0].msg);
    dispatch(setError(e.response.data.error[0].msg));
  }
};
