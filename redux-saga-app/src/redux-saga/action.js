export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const POST_DATA = 'POST_DATA';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_ERROR = 'POST_DATA_ERROR';

export const fetchData = () => ({
    type: FETCH_DATA,
});

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    data,
});

export const fetchDataError = () => ({
    type: FETCH_DATA_ERROR,
});


export const postData = (data) => ({
    type: POST_DATA,
    data
});

export const postDataSuccess = () => ({
    type: POST_DATA_SUCCESS,
});

export const postDataError = () => ({
    type: POST_DATA_ERROR,
});