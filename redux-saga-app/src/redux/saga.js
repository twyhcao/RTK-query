import {call, put, takeEvery} from 'redux-saga/effects';
import {
    FETCH_DATA,
    fetchData,
    fetchDataError,
    fetchDataSuccess,
    POST_DATA,
    postDataError,
    postDataSuccess,
} from './action';
import {api} from "./api";

function* fetchDataSaga() {
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
