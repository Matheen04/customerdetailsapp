
export const initialState = {
    items : [],
    item: {},
    singleUser : {}
}
export default function (state = initialState, action){
    if(action.type === 'SET_VALUE'){
        return {
            ...state,
            items : action.payload
        }
    }
    else if (action.type === 'CREATE_VALUE'){
        return {
            ...state,
            item : action.payload
        }
    }
    else if (action.type === 'SINGLE_USER'){
        return {
            ...state,
            singleUser : action.payload
        }
    }
   
    return state;


}