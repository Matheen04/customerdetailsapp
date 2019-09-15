import { combineReducers } from 'redux';
import setValueReducer from './setValueReducer';
import { reducer as form } from 'redux-form';

export default combineReducers({
    customerList: setValueReducer,
    form

});