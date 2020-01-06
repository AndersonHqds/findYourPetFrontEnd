/**
 * Action types
 */
export enum RepositoriesTypes {
  "LOAD_REQUEST" = "@repositories/LOAD_REQUEST",
  "LOAD_SUCCESS" = "@repositories/LOAD_SUCCESS",
  "LOAD_FAILURE" = "@repositories/LOAD_FAILURE"
}

/**
 * Data types
 */

export interface Repository {
  id: number;
  name: string;
}

/**
 * State types
 */

export interface repositoriesState {
  readonly data: Repository[];
  readonly loading: Boolean;
  readonly error: Boolean;
}
