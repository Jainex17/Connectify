import {configureStore} from '@reduxjs/toolkit'; 
import {userReducer} from './reducers/userReducer';

export const server = import.meta.env.VITE_API_KEY;

const store = configureStore({
    reducer:{
        user:userReducer,
    },
});

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
