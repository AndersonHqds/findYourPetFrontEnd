import { Reducer } from "redux";
import { repositoriesState, RepositoriesTypes } from "./types";
import produce from 'immer';

const INITIAL_STATE: repositoriesState = {
  data: [{ id: 1, name: "teste" }],
  error: false,
  loading: false
};

const reducer: Reducer<repositoriesState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft: any) => {
      switch (action.type) {

      case RepositoriesTypes.LOAD_REQUEST:
        draft.loading = true;
        break;

      case RepositoriesTypes.LOAD_SUCCESS:
        draft.data = [...state.data ,action.payload.data];
        draft.loading = false;
        draft.error = false;
        break;

      case RepositoriesTypes.LOAD_FAILURE:
        draft.data = [];
        draft.error = true;
        break;

      default:
        return state;
    }
  });
};
export default reducer;
