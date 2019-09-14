import {combineReducers} from 'redux';
import setValueReducer from './setValueReducer';


/*const reducers = (state={}, action) =>{
    
    if(action.type === 'SETVALUE'){
        return {
            ...state,
            data : action.payload
        }
    }
    return state;
} */

export default combineReducers({
    customerList : setValueReducer
    
});