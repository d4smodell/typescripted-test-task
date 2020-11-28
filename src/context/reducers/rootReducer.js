import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { bunkReleaseReducer } from './bunkReleaseReducer'
import { departmentsReducer } from './departmentsReducer'
import { hospitalPlacesReducer } from './hospitalPlacesReducer'

export const rootReducer = combineReducers({
    login: authReducer,
    departments: departmentsReducer,
    places: hospitalPlacesReducer,
    bunkRelease: bunkReleaseReducer
})