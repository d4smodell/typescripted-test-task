import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { departmentsReducer } from './departmentsReducer'

export const rootReducer = combineReducers({
    login: authReducer,
    departments: departmentsReducer,
})