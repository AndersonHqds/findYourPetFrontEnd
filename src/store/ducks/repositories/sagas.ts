import { loadSuccess, loadFailure } from "./actions";
import { call, put } from "redux-saga/effects";
import api from "../../../services/api";

export function* load() {
  try {
    const response = yield call(api.get, "users/mmarcmartins/repos");
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
