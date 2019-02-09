

import { put, takeEvery,takeLatest,fork } from 'redux-saga/effects'
import { delay } from 'redux-saga'

function* buyAsync(action) {
    let { item, qty } = action;
    // yield delay(3000)   // async-1
    // yield delay(3000)   // async-2
    yield put({ type: 'BUY', item, qty })
}


export function* watchBuyAsync() {
    yield takeLatest('BUY_ASYNC', buyAsync)
}
