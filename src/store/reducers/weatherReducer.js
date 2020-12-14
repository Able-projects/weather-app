import {GET_INFO, GET_ERROR} from '../actions/types'

const initialState = {
    cityInfo:{},
    errorInfo:{}
}

export default function (state=initialState,action){
    switch(action.type){
        case GET_INFO:
            return{
                ...state,
                cityInfo: action.payload.data
            }
        case GET_ERROR:
            return{
                ...state,
                errorInfo: action.payload.data
            }
        default:
            return state;
    }
}