// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import { supplierWatcher } from '../sagas/rootSaga';

// Without middleware, Redux only supports synchronous data flow. http://redux.js.org/docs/advanced/AsyncFlow.html
// So we're applying the thunk middleware to support async (ajax calls) within our actions.
// To clarify, middleware simply lets us slap some behavior in between dispatching an action
// and the moment it reaches the reducer. You can do other things like log, crash report, route, and so on.
// Thunk middleware lets us dispatch() functions, (useful for handling ajax calls in reducers)

// WHITELIST
const persistConfig = {
  key: 'root',
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const configureStore = (initialState) => {
  const store = createStore(
    persistedReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware, reduxImmutableStateInvariant()),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f // add support for Redux dev tools, if enabled. Otherwise, do nothing.
    )
  );

  sagaMiddleware.run(supplierWatcher);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  let persistor = persistStore(store);

  return { store, persistor }
};