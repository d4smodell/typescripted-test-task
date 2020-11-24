import { combineReducers } from 'redux'
import { additionInfoReducer } from './additionInfoReducer'
import { authReducer } from './authReducer'

export const rootReducer = combineReducers({
    login: authReducer,
    info: additionInfoReducer
})