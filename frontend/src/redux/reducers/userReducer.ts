import { createReducer } from "@reduxjs/toolkit";
import { deleteuserFail, deleteuserRequest, deleteuserSuccess, filterUserFail, filterUserRequest, filterUserSuccess, getusersFail, getusersRequest, getusersSuccess, searchuserFail, searchuserRequest, searchuserSuccess } from "../actions/actionTypes";
const initialState = {
  users : [],
  loading: true,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getusersRequest.type, (state) => {
      state.loading = true;
    })
    .addCase(getusersSuccess.type, (state, action: any) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(getusersFail.type, (state) => {
      state.loading = false;
    })
    .addCase(deleteuserRequest.type, (state) => {
      state.loading = true;
    })
    .addCase(deleteuserSuccess.type, (state, action: any) => {
      state.loading = false;
      state.users = state.users.filter((user: any) => user.id !== action.payload);
    })
    .addCase(deleteuserFail.type, (state) => {
      state.loading = false;
    })
    .addCase(searchuserRequest.type, (state) => {
      state.loading = true;
    })
    .addCase(searchuserSuccess.type, (state, action: any) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(searchuserFail.type, (state) => {
      state.loading = false;
    })
    .addCase(filterUserRequest.type, (state: any) => {
      state.loading = true;
    })
    .addCase(filterUserSuccess.type, (state: any, action: any) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(filterUserFail.type, (state: any) => {
      state.loading = false;
    })
});