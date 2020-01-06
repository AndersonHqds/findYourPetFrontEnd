import { RepositoriesTypes, Repository } from "./types";
import { action } from "typesafe-actions";

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Repository[]) =>
  action(RepositoriesTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);
