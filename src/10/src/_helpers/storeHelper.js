import {combineReducers, createStore} from 'redux';

import {todoReducers, fakeReducers} from '../_reducers';

const reducer = combineReducers({todoState:todoReducers, fake:fakeReducers});

export const store = createStore(reducer);