import {GET_ERROR,GET_INFO,GET_FORECAST} from './types'
import axios from 'axios/index'
var apiKey = 'c05c1e37c38ab839523ad145494f7269'

export const getWeather = (name) => dispatch => {
    axios.get('weather?q='+name+'&lang=ru&appid='+apiKey)
    .then(response => {
        return dispatch ({
            type:GET_INFO,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERROR,
            payload:err.response
        })
    })
}

export const signup = (data) => dispatch => {
    axios.post('api/auth',data)
    .then(response => {
        return dispatch ({
            type:GET_INFO,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERROR,
            payload:err.response
        })
    })
}




export const getWeatherForecast = (name) => dispatch => {
    axios.get('forecast?q='+name+'&lang=ru&appid='+apiKey)
    .then(response => {
        return dispatch ({
            type:GET_FORECAST,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERROR,
            payload:err.response
        })
    })
}