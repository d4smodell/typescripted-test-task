import { combineReducers } from 'redux'
import { additionInfoReducer } from './additionInfoReducer'
import { authReducer } from './authReducer'
import { departmentsReducer } from './departmentsReducer'

export const rootReducer = combineReducers({
    login: authReducer,
    info: additionInfoReducer,
    departments: departmentsReducer
})