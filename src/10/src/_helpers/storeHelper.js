import {combineReducers, createStore, applyMiddleware} from 'redux';

import {todoReducers, fakeReducers} from '../_reducers';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
const reducer = combineReducers({todoState:todoReducers, fake:fakeReducers});

export const store = createStore(reducer, applyMiddleware(logger, thunk));