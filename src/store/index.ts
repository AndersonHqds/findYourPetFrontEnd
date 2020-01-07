import { repositoriesState } from "./ducks/repositories/types";
import { Store } from "redux";
import { persistStore } from 'redux-persist';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./ducks/rootSaga";
import createPetStore from "./createStore";
import persistReducers from './persistReducers';
import rootReducers from "./ducks/rootReducers";

export interface ApplicationState {
  repositories: repositoriesState;
}

const sagaMiddleWare = createSagaMiddleware( { sagaMonitor: undefined });

const middlewares = [sagaMiddleWare];
const store: Store<ApplicationState> = createPetStore(
  persistReducers(rootReducers),
  middlewares
);
const persistor = persistStore(store);

sagaMiddleWare.run(rootSaga);

export {store, persistor};

