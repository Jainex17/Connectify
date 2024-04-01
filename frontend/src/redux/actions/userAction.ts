import { server } from "../store";
import axios from "axios";
import {
  getusersRequest,
    getusersSuccess,
    getusersFail,
} from "./actionTypes";

export const getusers = ({page = 1}: {page?: number}) => async (dispatch: any) => {
    dispatch({ type: getusersRequest.type });
    try {
        const response = await axios.get(`${server}/users?page=${page}`);
        dispatch({ type: getusersSuccess.type, payload: response.data});
    } catch (error) {
        dispatch({ type: getusersFail.type});
    }
    };