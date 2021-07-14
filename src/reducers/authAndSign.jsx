import { createAction, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "authAndSign",
  initialState: {
    signIn: false,
    errorInputs: "",
    submitButtonWaiting: false,
  },
  reducers: {
    signIn: (state, { payload }) => {
      state.signIn = payload;
    },
    errorInputs: (state, { payload }) => {
      state.errorInputs = payload;
    },
    submitButtonWaiting: (state, { payload }) => {
      state.submitButtonWaiting = payload;
    },
  },
});

export const { signIn, errorInputs, submitButtonWaiting } = slice.actions;

export default slice.reducer;

//actions creator
export const apiTouched = createAction("apiTouced");
// actions

export const checkLogIn = (data) => (dispatch) => {
  dispatch(
    apiTouched({
      url: "/login",
      method: "post",
      data,
      onError: errorInputs.type,
      onWaiting: submitButtonWaiting.type,
    })
  );
};

export const emptyError = (data) => (dispatch, getState) => {
  dispatch({ type: errorInputs.type, payload: "" });
};
