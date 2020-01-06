import { repositoriesState } from "./ducks/repositories/types";
import { Store } from "redux";
import { persistStore } from 'redux-persist';
import createSagaMiddleware, { SagaMiddlewareOptions } from "redux-saga";
import rootSaga from "./ducks/rootSaga";
import createPetStore from "./createStore";
import persistReducers from './persistReducers';

export interface ApplicationState {
  repositories: repositoriesState;
}

const optionsSagaMiddleWare : SagaMiddlewareOptions = { sagaMonitor: undefined }
const sagaMiddleWare = createSagaMiddleware(optionsSagaMiddleWare);

const middlewares = [sagaMiddleWare];
const store: Store<ApplicationState> = createPetStore(
  persistReducers,
  middlewares
);
const persistor = persistStore(store);

sagaMiddleWare.run(rootSaga);

export {store, persistor};


/*
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware({ sagaMonitor: null });

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
// export { store };

*/