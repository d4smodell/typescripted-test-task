import { bunkReleaseAPI } from "../../api/api"
import { BUNK_RELEASE } from "../types"

const initialState = {
    departmentId: null
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

const bunkReleaseAC = payload => ({type: BUNK_RELEASE, departmentId: payload})

export const getPatient = departmentId => async dispatch => {
    const response = await bunkReleaseAPI.releaseBunk()
    dispatch(bunkReleaseAC(response))
}
