// sagas.js
import {takeEvery, call, put} from 'redux-saga/effects';
import {
    fetchData,
    fetchDataSuccess,
    fetchDataError,
    postDataSuccess,
    postDataError,
    POST_DATA,
    FETCH_DATA,
} from './action';

const api = {
    fetchData: async () => {
        try {
            const response = await fetch('https://api/contacts');
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    },
    postData: async (contact) => {
        try {
            const response = await fetch('https://api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contact)
            });
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    },
};

function* fetchDataSaga(action) {
    try {
        const data = yield call(api.fetchData);
        yield put(fetchDataSuccess(data));
    } catch (error) {
        yield put(fetchDataError(error.message));
    }
}

function* postDataSaga(action) {
    try {
        yield call(api.postData, action.data);
        yield put(postDataSuccess());
        yield put(fetchData());
    } catch (error) {
        yield put(postDataError(error.message));
    }
}

function* rootSaga() {
    yield takeEvery(FETCH_DATA, fetchDataSaga);
    yield takeEvery(POST_DATA, postDataSaga);
}

export default rootSaga;
