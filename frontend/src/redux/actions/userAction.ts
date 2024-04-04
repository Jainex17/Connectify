import { server } from "../store";
import axios from "axios";
import {
  getusersRequest,
    getusersSuccess,
    getusersFail,
    deleteuserRequest,
    deleteuserSuccess,
    deleteuserFail,
    searchuserRequest,
    searchuserSuccess,
    searchuserFail,
    filterUserRequest,
    filterUserSuccess,
    filterUserFail,
    updateUserRequest,
    updateUserSuccess,
    updateUserFail,
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

export const deleteuser = (id: number) => async (dispatch: any) => {
    dispatch({ type: deleteuserRequest.type });
    try {
        await axios.delete(`${server}/users/${id}`);
        dispatch({ type: deleteuserSuccess.type, payload: id});
    } catch (error) {
        dispatch({ type: deleteuserFail.type});
    }
}

export const searchuser = (search: string) => async (dispatch: any) => {
    dispatch({ type: searchuserRequest.type });
    try {
        const response = await axios.get(`${server}/search/${search}`);
        dispatch({ type: searchuserSuccess.type, payload: response.data});
    } catch (error) {
        dispatch({ type: searchuserFail.type});
    }
};

export const filterUser = ({ gender, domain, availability}: { gender: any, domain: any, availability: any}) => async (dispatch: any) => {
    dispatch({ type: filterUserRequest.type });
    try {
        const response = await axios.get(`${server}/filter?gender=${gender}&domain=${domain}&available=${availability}`);
        dispatch({ type: filterUserSuccess.type, payload: response.data});
    } catch (error) {
        dispatch({ type: filterUserFail.type});
    }
}

export const updateUser = (id: number, data: any) => async (dispatch: any) => {
    dispatch({ type: updateUserRequest.type });
    try {
        await axios.put(`${server}/users/${id}`, data);
        const response = await axios.get(`${server}/users`);
        dispatch({ type: updateUserSuccess.type, payload: response.data});
    } catch (error) {
        dispatch({ type: updateUserFail.type});
    }
}