import {GET_COMPANY_LIST,GET_COMPANY_TYPES,GET_COMPANY_FIELDS,GET_ERROR,GET_MANAGER_LIST} from './types'
import axios from 'axios/index'

//Нужно заменить http://localhost:5520 на http://195.93.152.99:5520

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

export const addManager = (data,closeModal,id) => dispatch => {
    axios.post('http://localhost:5520/api/managers/',data)
    .then(response => {
        dispatch(getManagerList(id))
        closeModal()
    }).catch(err =>{
        return dispatch({
            type:GET_ERROR,
            payload:err.response
        })
    })
}

export const deleteCompany = (id) => dispatch => {
    axios.delete('http://localhost:5520/api/companies/'+id)
    .then(response => {
        dispatch(getCompanyList())
    }).catch(err =>{
        return dispatch({
            type:GET_ERROR,
            payload:err.response
        })
    })
}

export const getManagerList = (id) => dispatch => {
    axios.get('http://localhost:5520/api/managers/company/' + id)
    .then(response => {
        return dispatch ({
            type:GET_MANAGER_LIST,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERROR,
            payload:err.response
        })
    })
}