import {GET_INFO, GET_ERROR,GET_FORECAST} from '../actions/types'

const initialState = {
    cityInfo:{},
    errorInfo:{},
    forecastInfo:{}
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
        case GET_FORECAST:
            return{
                ...state,
                forecastInfo: action.payload.data
            }
        default:
            return state;
    }
}