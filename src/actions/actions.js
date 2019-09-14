import store from '../store';


export const setValue = () => dispatch => { 
    const url = 'https://reqres.in/api/users?page=2';
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch({
                        type: 'SET_VALUE',
                        payload : result
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
                        payload : result
                    })
                }
            )
}




export const createValue = (data) => dispatch => { 
    const url = 'https://reqres.in/api/users';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type','application/json');
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        myHeaders
    };
    fetch(url, options)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log({result: result, status : 'added'});
                    dispatch({
                        type: 'CREATE_VALUE',
                        payload : {result: result, status : 'added'}
                    })
                },
                (error) => {
                    dispatch({
                        type: 'CREATE_VALUE',
                        payload : {error: error, status : 'failed'}
                    })
                }
                
            )
}