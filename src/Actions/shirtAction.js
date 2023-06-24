import {  
    ALL_SHIRT_REQUEST,
    ALL_SHIRT_SUCCESS,
    ALL_SHIRT_FAIL,
    ALL_JEANS_REQUEST,
    ALL_JEANS_SUCCESS,
    ALL_JEANS_FAIL,
    ALL_JACKET_REQUEST,
    ALL_JACKET_SUCCESS,
    ALL_JACKET_FAIL,
    ALL_TSHIRT_REQUEST,
    ALL_TSHIRT_SUCCESS,
    ALL_TSHIRT_FAIL,
    ALL_KURTA_REQUEST,
    ALL_KURTA_SUCCESS,
    ALL_KURTA_FAIL,
    ALL_SPORTS_REQUEST,
    ALL_SPORTS_SUCCESS,
    ALL_SPORTS_FAIL,
    SHIRT_DETAILS_REQUEST,
    SHIRT_DETAILS_SUCCESS,
    SHIRT_DETAILS_FAIL,
    TSHIRT_DETAILS_REQUEST,
    TSHIRT_DETAILS_SUCCESS,
    TSHIRT_DETAILS_FAIL,
    JEANS_DETAILS_REQUEST,
    JEANS_DETAILS_SUCCESS,
    JEANS_DETAILS_FAIL,
    JACKET_DETAILS_REQUEST,
    JACKET_DETAILS_SUCCESS,
    JACKET_DETAILS_FAIL,
    KURTA_DETAILS_REQUEST,
    KURTA_DETAILS_SUCCESS,
    KURTA_DETAILS_FAIL,

} from "../Constants/shirtConstants"
import axios from "axios"

export const getShirt = () => async (dispatch) =>{
    try{

        dispatch({ type:ALL_SHIRT_REQUEST})

        const {data} = await axios.get('https://fuzzy-tan-frog.cyclic.app/api/v2/shirt')

        dispatch({
            type:ALL_SHIRT_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type:ALL_SHIRT_FAIL,
            payload:error.response.data.message
        })
    }
}

export const getshirtDetails = (id) => async (dispatch) =>{
    try{

        dispatch({ type: SHIRT_DETAILS_REQUEST})

        const {data} = await axios.get(`https://fuzzy-tan-frog.cyclic.app/api/v2/shirt/${id}`)

        dispatch({
            type:SHIRT_DETAILS_SUCCESS,
            payload: data.product
        })
    } catch(error){
        dispatch({
            type:SHIRT_DETAILS_FAIL,
            payload:error.response.data.message
        })
    }
}



export const getTshirt = () => async (dispatch) =>{
    try{

        dispatch({ type:ALL_TSHIRT_REQUEST})

        const {data} = await axios.get('https://fuzzy-tan-frog.cyclic.app/api/v2/tshirt')

        dispatch({
            type:ALL_TSHIRT_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type:ALL_TSHIRT_FAIL,
            payload:error.response.data.message
        })
    }
}

export const gettshirtDetails = (id) => async (dispatch) =>{
    try{

        dispatch({ type: TSHIRT_DETAILS_REQUEST})

        const {data} = await axios.get(`https://fuzzy-tan-frog.cyclic.app/api/v2/tshirt/${id}`)

        dispatch({
            type:TSHIRT_DETAILS_SUCCESS,
            payload: data.product
        })
    } catch(error){
        dispatch({
            type:TSHIRT_DETAILS_FAIL,
            payload:error.response.data.message
        })
    }
}



export const getJeans = () => async (dispatch) =>{
    try{

        dispatch({ type:ALL_JEANS_REQUEST})

        const {data} = await axios.get('https://fuzzy-tan-frog.cyclic.app/api/v2/jeans')

        dispatch({
            type:ALL_JEANS_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type:ALL_JEANS_FAIL,
            payload:error.response.data.message
        })
    }
}

export const getjeansDetails = (id) => async (dispatch) =>{
    try{

        dispatch({ type: JEANS_DETAILS_REQUEST})

        const {data} = await axios.get(`https://fuzzy-tan-frog.cyclic.app/api/v2/jeans/${id}`)

        dispatch({
            type:JEANS_DETAILS_SUCCESS,
            payload: data.product
        })
    } catch(error){
        dispatch({
            type:JEANS_DETAILS_FAIL,
            payload:error.response.data.message
        })
    }
}



export const getJacket = () => async (dispatch) =>{
    try{

        dispatch({ type:ALL_JACKET_REQUEST})

        const {data} = await axios.get('https://fuzzy-tan-frog.cyclic.app/api/v2/jacket')

        dispatch({
            type:ALL_JACKET_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type:ALL_JACKET_FAIL,
            payload:error.response.data.message
        })
    }
}

export const getjacketDetails = (id) => async (dispatch) =>{
    try{

        dispatch({ type: JACKET_DETAILS_REQUEST})

        const {data} = await axios.get(`https://fuzzy-tan-frog.cyclic.app/api/v2/jacket/${id}`)

        dispatch({
            type:JACKET_DETAILS_SUCCESS,
            payload: data.product
        })
    } catch(error){
        dispatch({
            type:JACKET_DETAILS_FAIL,
            payload:error.response.data.message
        })
    }
}



export const getKurta = () => async (dispatch) =>{
    try{

        dispatch({ type:ALL_KURTA_REQUEST})

        const {data} = await axios.get('https://fuzzy-tan-frog.cyclic.app/api/v2/kurtas')

        dispatch({
            type:ALL_KURTA_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type:ALL_KURTA_FAIL,
            payload:error.response.data.message
        })
    }
}

export const getkurtaDetails = (id) => async (dispatch) =>{
    try{

        dispatch({ type: KURTA_DETAILS_REQUEST})

        const {data} = await axios.get(`https://fuzzy-tan-frog.cyclic.app/api/v2/kurtas/${id}`)

        dispatch({
            type:KURTA_DETAILS_SUCCESS,
            payload: data.product
        })
    } catch(error){
        dispatch({
            type:KURTA_DETAILS_FAIL,
            payload:error.response.data.message
        })
    }
}


