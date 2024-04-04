import { server } from "../store";
import axios from "axios";
import { getallteamsFail, getallteamsRequest, getallteamsSuccess } from "./actionTypes";

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
    dispatch({ type: getallteamsRequest.type });
    try {
        const response = await axios.post(`${server}/team`, team);
        dispatch({ type: getallteamsSuccess.type, payload: response.data});
    } catch (error: any) {
        console.log(error);
        dispatch({ type: getallteamsFail.type, payload: error.message});
    }
};