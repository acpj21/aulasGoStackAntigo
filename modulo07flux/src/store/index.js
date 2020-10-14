import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const createSagaMiddleware = createSagaMiddleware();

const enhancer = process.env.NODE_ENV === 'development'
? compose(
    console.tron.createEnhancer(),
    applyMiddleware(createSagaMiddleware)
    )
: applyMiddleware(createSagaMiddleware);

const store = createStore(rootReducer, enhancer);

createSagaMiddleware.run(rootSaga);

export default store;