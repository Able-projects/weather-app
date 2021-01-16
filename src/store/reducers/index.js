import {combineReducers} from 'redux'
import weatherReducer from './weatherReducer'
import companyReducer from './companyReducer'
export default combineReducers({
    weatherReducer: weatherReducer,
    companyReducer:companyReducer
})