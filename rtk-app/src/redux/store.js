import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import rtkLogger from '../logging/rtkLogger';
import { contactApi } from "./apiSlice";

export const store = configureStore({
    reducer: {
        [contactApi.reducerPath]: contactApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(contactApi.middleware, rtkLogger)
});

setupListeners(store.dispatch);