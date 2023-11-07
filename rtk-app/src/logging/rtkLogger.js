import { isRejectedWithValue } from "@reduxjs/toolkit";

const rtkErrorLogger = (api) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
        const response = action.meta?.baseQueryMeta?.response;
        
        const payload = {
            url: response.url,
            status: response.status,
            statusText: response.statusText,
            ok: response.ok,
        }
        
        console.log(`[ERROR] ${JSON.stringify(payload, null, 2)}`);
    } 

    return next(action);
}

export default rtkErrorLogger;