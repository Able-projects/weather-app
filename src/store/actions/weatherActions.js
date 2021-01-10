import {GET_ERROR,GET_INFO,GET_FORECAST,GET_USER_INFO} from './types'
import axios from 'axios/index'
import setAuthToken from '../setAuthToken'
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
    axios.post('http://localhost:5520/api/auth/signin',data)
    .then(response => {
        const {auth,token} = response.data
        localStorage.setItem('auth',auth)
        localStorage.setItem('token',token)
        setAuthToken(token)
        dispatch(getCurrentUser())
    }).catch(err =>{
        return dispatch({
            type:GET_ERROR,
            payload:err.response
        })
    })
}

export const getCurrentUser = () => dispatch => {
    axios.get('http://localhost:5520/api/auth/current')
    .then(response => {
        return dispatch({
            type:GET_USER_INFO,
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