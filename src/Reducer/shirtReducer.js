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

} from '../Constants/shirtConstants'



export const shirtReducer = (state = { products:[] },action) =>{
    switch(action.type){

        case ALL_SHIRT_REQUEST:
          
            return{
                loading:true,
                products: []
            }

            case ALL_SHIRT_SUCCESS:
                return{
                    loading:false,
                    products: action.payload.products
                }

             
                
            case ALL_SHIRT_FAIL:
             
                return{
                    loading:false,
                    error:action.payload
                }  

        default :
        return state;
    }
}

export const shirtDetailsReducer = (state = {product : {} },action) => {

    switch(action.type){

        case SHIRT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

       case SHIRT_DETAILS_SUCCESS:
             return {
                    
                    loading: false,
                    product:action.payload
                }

        case SHIRT_DETAILS_FAIL:
            return {
               ...state,
               error:action.payload
            }

        default:
            return state
    }
}


export const tshirtReducer = (state = { products:[] },action) =>{
    switch(action.type){

        case ALL_TSHIRT_REQUEST:
          
            return{
                loading:true,
                products: []
            }

            case ALL_TSHIRT_SUCCESS:
                return{
                    loading:false,
                    products: action.payload.products
                }

             
                
            case ALL_TSHIRT_FAIL:
             
                return{
                    loading:false,
                    error:action.payload
                }  

        default :
        return state;
    }
}



export const tshirtDetailsReducer = (state = {product : {} },action) => {

    switch(action.type){

        case TSHIRT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

       case TSHIRT_DETAILS_SUCCESS:
             return {
                    
                    loading: false,
                    product:action.payload
                }

        case TSHIRT_DETAILS_FAIL:
            return {
               ...state,
               error:action.payload
            }

        default:
            return state
    }
}


export const jeansReducer = (state = { products:[] },action) =>{
    switch(action.type){

        case ALL_JEANS_REQUEST:
          
            return{
                loading:true,
                products: []
            }

            case ALL_JEANS_SUCCESS:
                return{
                    loading:false,
                    products: action.payload.products
                }

             
                
            case ALL_JEANS_FAIL:
             
                return{
                    loading:false,
                    error:action.payload
                }  

        default :
        return state;
    }
}


export const jeansDetailsReducer = (state = {product : {} },action) => {

    switch(action.type){

        case JEANS_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

       case JEANS_DETAILS_SUCCESS:
             return {
                    
                    loading: false,
                    product:action.payload
                }

        case JEANS_DETAILS_FAIL:
            return {
               ...state,
               error:action.payload
            }

        default:
            return state
    }
}



export const jacketReducer = (state = { products:[] },action) =>{
    switch(action.type){

        case ALL_JACKET_REQUEST:
          
            return{
                loading:true,
                products: []
            }

            case ALL_JACKET_SUCCESS:
                return{
                    loading:false,
                    products: action.payload.products
                }

             
                
            case ALL_JACKET_FAIL:
             
                return{
                    loading:false,
                    error:action.payload
                }  

        default :
        return state;
    }
}


export const jacketDetailsReducer = (state = {product : {} },action) => {

    switch(action.type){

        case JACKET_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

       case JACKET_DETAILS_SUCCESS:
             return {
                    
                    loading: false,
                    product:action.payload
                }

        case JACKET_DETAILS_FAIL:
            return {
               ...state,
               error:action.payload
            }

        default:
            return state
    }
}



export const kurtaReducer = (state = { products:[] },action) =>{
    switch(action.type){

        case ALL_KURTA_REQUEST:
          
            return{
                loading:true,
                products: []
            }

            case ALL_KURTA_SUCCESS:
                return{
                    loading:false,
                    products: action.payload.products
                }

             
                
            case ALL_KURTA_FAIL:
             
                return{
                    loading:false,
                    error:action.payload
                }  

        default :
        return state;
    }
}



export const kurtaDetailsReducer = (state = {product : {} },action) => {

    switch(action.type){

        case KURTA_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

       case KURTA_DETAILS_SUCCESS:
             return {
                    
                    loading: false,
                    product:action.payload
                }

        case KURTA_DETAILS_FAIL:
            return {
               ...state,
               error:action.payload
            }

        default:
            return state
    }
}



