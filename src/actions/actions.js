
export const setValue = () => dispatch => {
    const url = 'https://reqres.in/api/users?page=2';
    fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                dispatch({
                    type: 'SET_VALUE',
                    payload: result
                })
            }
        )
}

export const getSingleUser = () => dispatch => {
    const url = 'https://reqres.in/api/users/2';
    fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                dispatch({
                    type: 'SINGLE_USER',
                    payload: result
                })
            }
        )
}

export const createValue = (data) => dispatch => {
    const url = 'https://reqres.in/api/users';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        myHeaders
    };
    fetch(url, options)
        .then(res => res.json())
        .then(
            (result) => {
                console.log({ result: result, status: 'added' });
                dispatch({
                    type: 'CREATE_VALUE',
                    payload: { result: result, status: 'added' }
                })
            },
            (error) => {
                dispatch({
                    type: 'CREATE_VALUE',
                    payload: { error: error, status: 'failed' }
                })
            }
        )
}

export const updateValue = (data) => dispatch => {
    const url = 'https://reqres.in/api/users/2';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const options = {
        method: 'PUT',
        body: JSON.stringify(data),
        myHeaders
    };
    fetch(url, options)
        .then(res => res.json())
        .then(
            (result) => {
                console.log({ result: result, status: 'updated' });
                dispatch({
                    type: 'UPDATE_VALUE',
                    payload: { result: result, status: 'updated', data: data }
                })
            },
            (error) => {
                dispatch({
                    type: 'UPDATE_VALUE',
                    payload: { error: error, status: 'failed', data: data }
                })
            }
        )
}

export const deleteValue = (data) => dispatch => {
    const url = 'https://reqres.in/api/users/2';
    const options = {
        method: 'DELETE'
    };
    fetch(url, options)
        .then(
            (result) => {
                dispatch({
                    type: 'DELETE_VALUE',
                    payload: { result: result, status: 'deleted', data: data }
                })
            },
            (error) => {
                dispatch({
                    type: 'DELETE_VALUE',
                    payload: { error: error, status: 'not deleted', data: data }
                })
            }
        )
}


export const onDeleteUpdate = (data) => dispatch => {
    dispatch({
        type: 'SET_VALUE',
        payload: data
    })
}



