import {GET_COMPANY_LIST,GET_COMPANY_TYPES,GET_COMPANY_FIELDS,GET_ERROR} from './types'
import axios from 'axios/index'

export const getCompanyFields = () => dispatch => {
    axios.get('http://localhost:5520/api/companyFields/')
    .then(response => {
        return dispatch ({
            type:GET_COMPANY_FIELDS,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERROR,
            payload:err.response
        })
    })
}

export const getCompanyTypes = () => dispatch => {
    axios.get('http://localhost:5520/api/companyTypes/')
    .then(response => {
        return dispatch ({
            type:GET_COMPANY_TYPES,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERROR,
            payload:err.response
        })
    })
}

export const getCompanyList = () => dispatch => {
    axios.get('http://localhost:5520/api/companies/1')
    .then(response => {
        return dispatch ({
            type:GET_COMPANY_LIST,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERROR,
            payload:err.response
        })
    })
}

export const addCompany = (data,closeModal) => dispatch => {
    axios.post('http://localhost:5520/api/companies/',data)
    .then(response => {
        dispatch(getCompanyList())
        closeModal()
    }).catch(err =>{
        return dispatch({
            type:GET_ERROR,
            payload:err.response
        })
    })
}