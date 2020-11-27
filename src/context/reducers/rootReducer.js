import { combineReducers } from 'redux'
import { additionInfoReducer } from './additionInfoReducer'
import { authReducer } from './authReducer'
import { bunkReleaseReducer } from './bunkReleaseReducer'
import { departmentsReducer } from './departmentsReducer'
import { hospitalPlacesReducer } from './hospitalPlacesReducer'

export const rootReducer = combineReducers({
    login: authReducer,
    departments: departmentsReducer,
    hospitalPlaces: hospitalPlacesReducer,
    bunkRelease: bunkReleaseReducer
})