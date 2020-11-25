import { combineReducers } from 'redux'
import { additionInfoReducer } from './additionInfoReducer'
import { authReducer } from './authReducer'
import { departmentsReducer } from './departmentsReducer'
import { hospitalPlacesReducer } from './hospitalPlacesReducer'

export const rootReducer = combineReducers({
    login: authReducer,
    info: additionInfoReducer,
    departments: departmentsReducer,
    hospitalPlaces: hospitalPlacesReducer
})