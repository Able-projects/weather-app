import {GET_ERROR,GET_INFO} from './types'
import axios from 'axios/index'
var apiKey = 'c05c1e37c38ab839523ad145494f7269'

export const getWeather = (name) => dispatch => {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q='+name+'&lang=ru&appid='+apiKey)
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