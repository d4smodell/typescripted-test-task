import { bunkReleaseAPI } from "../../api"
import { BUNK_RELEASE } from "../types"

const initialState = {
    currentPatient: null
}

export const bunkReleaseReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUNK_RELEASE:
            return {
                ...state,
                currentPatient: action.currentPatient
            }
        default:
            return state
    }
}

const bunkReleaseAC = payload => ({type: BUNK_RELEASE, currentPatient: payload})

export const getPatient = () => async dispatch => {
    const response = await bunkReleaseAPI.releaseBunk()
    dispatch(bunkReleaseAC(response))
}

getPatient()