import { SET_ERROR, SHORT_URL } from "./actions";

const initialState = {
  link: null,
  error: null
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SHORT_URL:
      return { ...state, link: payload, error: null };
    case SET_ERROR:
      return { ...state, link: null, error: payload };
    default:
      return state;
  }
}
