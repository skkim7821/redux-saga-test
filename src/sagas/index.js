import { put, takeEvery, all } from "redux-saga/effects";
import { getUserDataWatch } from "./users";

// const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// function* helloSaga() {
//   console.log("Hello Sagas!");
// }

// function* incrementAsync() {
//   yield delay(1000);
//   yield put({ type: "INCREMENT" });
// }

// function* watchInrementAsync() {
//   yield takeEvery("INCREMENT_ASYNC", incrementAsync);
// }

export default function* rootSaga() {
  yield all([
    // helloSaga(),
    // watchInrementAsync(),
    getUserDataWatch(),
  ]);
}
