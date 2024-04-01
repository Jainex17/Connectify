import { createReducer } from "@reduxjs/toolkit";
import { getusersFail, getusersRequest, getusersSuccess } from "../actions/actionTypes";
const initialState = {
  users : [],
  loading: true,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getusersRequest.type, (state, action) => {
      state.loading = true;
    })
    .addCase(getusersSuccess.type, (state, action: any) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(getusersFail.type, (state, action) => {
      state.loading = false;
    })
 
});