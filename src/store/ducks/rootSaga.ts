import { all, takeLatest } from "redux-saga/effects";
import { RepositoriesTypes } from "./user/types";
import user from "./user/sagas";

export default function* rootSaga() {
  return yield all([user]);
}
