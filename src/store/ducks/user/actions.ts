import { RepositoriesTypes, Repository } from "./types";


export const loadRequest = () => {
  return {
    type: RepositoriesTypes.LOAD_REQUEST
  };
}

export const loadSuccess = (data:Repository[]) => {
  return {
    type: RepositoriesTypes.LOAD_SUCCESS,
    payload: data
  };
}

export const loadFailure = () => {
  return {
    type: RepositoriesTypes.LOAD_FAILURE,
  };
}
