import Axios from 'axios';
import { ORDERS_FETCH } from './type';

export const ordersFetch = () => {

    return dispatch => {
        Axios.get("http://localhost:3001/orders").then(
            res => {
                dispatch({ type: ORDERS_FETCH, payload: res.data });
            })
    }
}

export const orderDelete = id => {

    return dispatch => {
        Axios.delete("http://localhost:3001/orders/" + id).then(
            Axios.get("http://localhost:3001/orders").then(
                res => {
                    dispatch({ type: ORDERS_FETCH, payload: res.data });
                })
        )
    }
}