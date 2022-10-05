import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './reducer/Login';

export const store = configureStore({
    reducer:{
        login: loginReducer,
    },
})