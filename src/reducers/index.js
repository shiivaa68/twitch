import {combineReducers} from 'redux'
import AuthReducer from './authReducer'
import {reducer} from 'redux-form'

export default combineReducers({
    auth:AuthReducer,
    form:reducer
    
})