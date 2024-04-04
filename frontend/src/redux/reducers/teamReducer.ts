import { createReducer } from "@reduxjs/toolkit";
import { getallteamsFail, getallteamsRequest, getallteamsSuccess } from "../actions/actionTypes";
const initialState = {
  teams : [],
  teamloading: true,
  error: null
};

export const teamReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getallteamsRequest.type, (state) => {
        state.teamloading = true;
    })
    .addCase(getallteamsSuccess.type, (state, action: any) => {
        state.teamloading = false;
        state.teams = action.payload;
    })
    .addCase(getallteamsFail.type, (state, action: any) => {
        state.error = action.payload;
        state.teamloading = false;
    })
});