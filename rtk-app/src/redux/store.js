import {configureStore} from '@reduxjs/toolkit'
import {contactApi} from "./apiSlice";
import rtkLogger from '../logging/rtkLogger';

export const store = configureStore({
    reducer: {
        [contactApi.reducerPath]: contactApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        const middleware = getDefaultMiddleware().concat(contactApi.middleware);

        if (process.env.NODE_ENV !== "test") {
            middleware.push(rtkLogger);
        }
        return middleware;
    }
});
