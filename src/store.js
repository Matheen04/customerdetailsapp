import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers';
import {initialState} from './setValueReducer';

const middleware = [thunk];

const store = createStore(
    combineReducers, 
    initialState, 
    applyMiddleware(...middleware)
);

export default store;

