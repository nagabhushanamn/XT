

import { put, takeLatest, call } from 'redux-saga/effects'
import Api from '../api/Api'

function* buyAsync(action) {
    let { item, qty } = action;
    yield call(Api.addToCart, item, qty)
    yield put({ type: 'BUY', item, qty })
}


export function* watchBuyAsync() {
    yield takeLatest('BUY_ASYNC', buyAsync)
}
