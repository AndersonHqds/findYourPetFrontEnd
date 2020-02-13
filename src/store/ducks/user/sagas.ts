import { RepositoriesTypes } from './types';
import { loadSuccess, loadFailure } from "./actions";
import { call, put, takeLatest, all} from "redux-saga/effects";
import api from "../../../services/api";


function* load() {
  try {
    const response = yield call(api.get, "users/mmarcmartins/repos");
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default all([
  takeLatest(RepositoriesTypes.LOAD_REQUEST, load),  
]);