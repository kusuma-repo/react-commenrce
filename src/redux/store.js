import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root.reducer';
import { persistStore } from 'redux-persist';
import rootSaga from './root.saga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddlewares = createSagaMiddleware();

const middlewares = [sagaMiddlewares];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddlewares.run(rootSaga);
const persisStore = persistStore(store);
export { store, persisStore };
