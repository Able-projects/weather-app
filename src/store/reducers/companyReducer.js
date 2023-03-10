import {GET_COMPANY_LIST,GET_COMPANY_TYPES,GET_COMPANY_FIELDS,GET_MANAGER_LIST} from '../actions/types'



const initialState = {
    companyTypes:[],
    companyFields:[],
    companyList:[],
    managers:[]
}

export default function (state=initialState,action){
    switch(action.type){
        case GET_COMPANY_LIST:
            return{
                ...state,
                companyList: action.payload.data
            }
        case GET_COMPANY_TYPES:
            return{
                ...state,
                companyTypes: action.payload.data
            }
        case GET_COMPANY_FIELDS:
            return{
                ...state,
                companyFields: action.payload.data
            }
        case GET_MANAGER_LIST:
            return{
                ...state,
                managers: action.payload.data
            }
        default:
            return state;
    }
}