import { server } from "../store";
import axios from "axios";
import { createTeamFail, createTeamRequest, createTeamSuccess, getTeamMembersDetailsFail, getTeamMembersDetailsRequest, getTeamMembersDetailsSuccess, getallteamsFail, getallteamsRequest, getallteamsSuccess } from "./actionTypes";

export const getallteams = () => async (dispatch: any) => {
    dispatch({ type: getallteamsRequest.type });
    try {
        const response = await axios.get(`${server}/team`);
        dispatch({ type: getallteamsSuccess.type, payload: response.data});
    } catch (error) {
        dispatch({ type: getallteamsFail.type});
    }
};

export const createTeam = (team: any) => async (dispatch: any) => {
    dispatch({ type: createTeamRequest.type });
    try {
        const response = await axios.post(`${server}/team`, team);
        dispatch({ type: createTeamSuccess.type, payload: response.data});
    } catch (error: any) {
        dispatch({ type: createTeamFail.type, payload: error.response.data.message});
    }
};

export const getTeamMembersDetails = (teammembersids: any) => async (dispatch: any) => {
    dispatch({ type: getTeamMembersDetailsRequest.type });
    try {
        const response = await axios.get(`${server}/teamusers`, teammembersids);
        dispatch({ type: getTeamMembersDetailsSuccess.type, payload: response.data});
    } catch (error) {
        dispatch({ type: getTeamMembersDetailsFail.type});
    }
}
