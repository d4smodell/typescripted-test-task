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

const dischargePatient = (payload) => ({type: BUNK_RELEASE, payload})

export const discharge = (sex, has_oxygen, department_id) => async dispatch => {
    const response = await bunkReleaseAPI.releaseBunk(sex, has_oxygen, department_id)
    dispatch(dischargePatient(response))
}
