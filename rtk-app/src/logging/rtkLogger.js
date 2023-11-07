import { isRejectedWithValue } from "@reduxjs/toolkit";

const rtkErrorLogger = (api) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
        const request = action.meta?.baseQueryMeta?.request;
        const response = action.meta?.baseQueryMeta?.response;
        
        const reason = response ? "Request failed" : "Network error";
        
        const payload = {
            url: response?.url ?? request?.url,
            status: response?.status,
            statusText: response?.statusText,
            ok: response?.ok,
        }
        const error = { [reason]: payload };
        
        console.log(`[ERROR]: ${JSON.stringify(error, null, 2)}`);
    } 

    return next(action);
}

export default rtkErrorLogger;