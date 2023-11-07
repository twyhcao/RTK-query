import {configureStore} from '@reduxjs/toolkit'
import {contactApi} from "./apiSlice";
import rtkLogger from '../logging/rtkLogger';

export const store = configureStore({
    reducer: {
        [contactApi.reducerPath]: contactApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(contactApi.middleware, rtkLogger),
});
