import { createReducer } from "@reduxjs/toolkit";
import { clearError, createTeamFail, createTeamRequest, createTeamSuccess, getTeamMembersDetailsFail, getTeamMembersDetailsRequest, getTeamMembersDetailsSuccess, getallteamsFail, getallteamsRequest, getallteamsSuccess } from "../actions/actionTypes";
const initialState = {
  teams : [],
  teamloading: true,
  isTeamCreated: false,
  error: null,
  memberdetails: []
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
    .addCase(clearError.type, (state) => {
        state.error = null;
    })
    .addCase(getTeamMembersDetailsRequest.type, (state) => {
        state.teamloading = true;
    })
    .addCase(getTeamMembersDetailsSuccess.type, (state, action: any) => {
        state.memberdetails = action.payload;
        state.teamloading = false;
    })
    .addCase(getTeamMembersDetailsFail.type, (state) => {
        state.teamloading = false;
    })
    .addCase(createTeamRequest.type, (state) => {
        state.teamloading = true;
    })
    .addCase(createTeamSuccess.type, (state) => {
        state.isTeamCreated = true;
        state.teamloading = false;
    })
    .addCase(createTeamFail.type, (state) => {
        state.error = null;
    })
});