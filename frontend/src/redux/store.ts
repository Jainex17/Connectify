import {configureStore} from '@reduxjs/toolkit'; 
import {userReducer} from './reducers/userReducer';
import { teamReducer } from './reducers/teamReducer';

export const server = import.meta.env.VITE_API_KEY;

const store = configureStore({
    reducer:{
        user: userReducer,
        team: teamReducer
    },
});

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
