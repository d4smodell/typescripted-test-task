import { additionInfoAPI } from '../../api/api'
import { GET_ADDITIONAL_INFO } from '../types'

const initialState = {
    info: []
}

export const additionInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ADDITIONAL_INFO:
            return {
                ...state,
                info: action.info
            }

        default:
            return state
    }
} 

const getAdditionalInfo = payload => ({type: GET_ADDITIONAL_INFO, info: payload})

export const getInfo = () => async dispatch => {
    const response = await additionInfoAPI.getAdditionInfo()
    console.log(response.data.departments)
    dispatch(getAdditionalInfo(response.data.departments))
}