import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './userTypes';
import axios from 'axios';
const fecthUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}
const fecthUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}
const fecthUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fecthUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response);
                dispatch(fecthUserSuccess(response.data))

            })
            .catch((error) => {
                console.log(error)
                dispatch(fecthUserFailure(error.message));
            })
    }
}

export { fecthUserRequest, fecthUserSuccess, fecthUserFailure };
