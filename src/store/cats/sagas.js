import { call, put, takeLatest } from 'redux-saga/effects';
import CatsActions, {GET_ALL_CATS, GET_ALL_CATS_LENGTH, CURRENT_PAGE} from './actions';
import axios from 'axios';

function* getAllCatsSaga(action) {
  try {
    const { pageSize } = action.payload;
    const { data } = yield call(() => axios.get(`https://api.thecatapi.com/v1/breeds?attach_breed=0&limit=${pageSize}`))
    yield put(CatsActions.getAllCatsSuccess(data))
  } catch (err) {
    yield put(CatsActions.getAllCatsFail(err.response))
  }
}

function* getAllCatsLengthSaga(action) {
  try {
    const { data } = yield call(() => axios.get(`https://api.thecatapi.com/v1/breeds`))
    yield put(CatsActions.getAllCatsLengthSuccess(data))
  } catch (err) {
    yield put(CatsActions.getAllCatsLengthFail(err.response))
  }
}

function* currentPageSaga(action) {
  try {
    const { pageSize, currentPage } = action.payload;
    const { data } = yield call(() => axios.get(`https://api.thecatapi.com/v1/breeds?attach_breed=0&limit=${pageSize}&page=${currentPage}`))
    yield put(CatsActions.currentPageSuccess(data))
  } catch (err) {
    yield put(CatsActions.currentPageFail(err.response))
  }
}

export default function* watchCats() {
  yield takeLatest(GET_ALL_CATS, getAllCatsSaga)
  yield takeLatest(GET_ALL_CATS_LENGTH, getAllCatsLengthSaga)
  yield takeLatest(CURRENT_PAGE, currentPageSaga)
}