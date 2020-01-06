import { createStore, compose, applyMiddleware, Reducer, Middleware } from 'redux';

export default (reducers : Reducer, middlewares: Middleware[]) => {
    const enhancer =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  return createStore(reducers, enhancer(applyMiddleware(...middlewares)));
};
