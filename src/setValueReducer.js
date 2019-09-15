
export const initialState = {
    items: [],
    item: {},
    singleUser: {},
    updateUser: {},
    deleteUser: {}
}
export default function (state = initialState, action) {
    if (action.type === 'SET_VALUE') {
        return {
            ...state,
            items: action.payload
        }
    }
    else if (action.type === 'CREATE_VALUE') {
        return {
            ...state,
            item: action.payload
        }
    }
    else if (action.type === 'SINGLE_USER') {
        return {
            ...state,
            singleUser: action.payload
        }
    }
    else if (action.type === 'UPDATE_VALUE') {
        return {
            ...state,
            updateUser: action.payload
        }
    }
    else if (action.type === 'DELETE_VALUE') {
        return {
            ...state,
            deleteUser: action.payload
        }
    }
    return state;
}