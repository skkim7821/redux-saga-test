import { put, takeEvery, call } from "redux-saga/effects";
import { getUserDataSucess, getUserData } from "../reducers/userSlice";
import axios from "axios";

function* fetchUserData() {
  try {
    const { data } = yield call(
      [axios, "get"],
      "https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty"
    );
    yield put(getUserDataSucess(data));
  } catch (error) {}
}

export function* getUserDataWatch() {
  yield takeEvery(getUserData.type, fetchUserData);
}
