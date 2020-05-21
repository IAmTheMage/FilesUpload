import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import api from "../services/api";
import { LoginDataInterface, SignUpDataInterface } from "./types";

function* loginWithUser(action: { type: string; data: LoginDataInterface }) {
  try {
    const response = yield api.post("/login", action.data);
    localStorage.setItem("token", response.data.token);
    yield put({ type: "LOGIN", data: response.data });
  } catch (e) {}
}

function* signUpUser(action: { type: string; data: SignUpDataInterface }) {
  try {
    const response = yield api.post("/user", action.data);
    yield put({ type: "SIGN_UP", data: response.data });
  } catch (e) {
    yield put({ type: "SIGN_UP_ERROR", error: e });
  }
}

function* fetchFeedData(action: { type: string }) {
  try {
    const response = yield api.get("/user", {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    yield put({ type: "FEED_GET_DATA", data: response.data });
  } catch (e) {}
}

function* mySaga() {
  yield takeLatest("LOGIN_ACTION", loginWithUser);
  yield takeLatest("SIGN_UP_ACTION", signUpUser);
  yield takeLatest("FEED_GET_DATA_ACTION", fetchFeedData);
}

export default mySaga;
