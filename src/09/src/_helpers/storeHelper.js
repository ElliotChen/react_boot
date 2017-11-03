import {combineReducers, createStore} from 'redux';

import {todoReducers} from '../_reducers';

const reducer = combineReducers({todoReducers});

export const store = createStore(reducer);