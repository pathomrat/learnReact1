import Axios from 'axios';
import { PRODUCTS_FETCH } from './type';

export const productsFetch = () => {

    return dispatch => {
        Axios.get("http://localhost:3001/products").then(
            res => {
                dispatch({ type: PRODUCTS_FETCH, payload: res.data });
            })
    }
}

export const productDelete = id => {

    return dispatch => {
        Axios.delete("http://localhost:3001/products/" + id).then(
            Axios.get("http://localhost:3001/products").then(
                res => {
                    dispatch({ type: PRODUCTS_FETCH, payload: res.data });
                })
        )
    }
}
