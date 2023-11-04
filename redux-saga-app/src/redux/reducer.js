import {
    FETCH_DATA,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERROR,
    POST_DATA,
    POST_DATA_SUCCESS,
    POST_DATA_ERROR
} from './action';

const initialState = {
    fetch: {
        data: null,
        isLoading: null,
        isError: null,
    },
    post: {
        isLoading: null,
        isError: null,
    }
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                fetch: {
                    ...state.fetch,
                    isLoading: true,
                    isError: false,
                },
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                fetch: {
                    ...state.fetch,
                    data: action.data,
                    isLoading: false,
                    isError: false,
                },
            };
        case FETCH_DATA_ERROR:
            return {
                ...state,
                fetch: {
                    ...state.fetch,
                    isLoading: false,
                    isError: true,
                },
            };
        case POST_DATA:
            return {
                ...state,
                post: {
                    isLoading: true,
                    isError: false,
                }
            };
        case POST_DATA_SUCCESS:
            return {
                ...state,
                post: {
                    isLoading: false,
                    isError: false,
                }
            };
        case POST_DATA_ERROR:
            return {
                ...state,
                post: {
                    isLoading: false,
                    isError: true,
                }
            };
        default:
            return state
    }
};

export default rootReducer;