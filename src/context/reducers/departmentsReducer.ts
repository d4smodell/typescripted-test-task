import { ThunkAction } from "redux-thunk"
import { departmentsAPI } from "../../api/api"
import { GET_DEPARTMENTS, GET_SINGLE_DEPARTMENT } from "../types"
import { IRootState } from "./rootReducer"

type ActionTypes = GetDepartmentsType | GetSingleDepartmentType

type InitialStateType = {
    departments: Array<number | string>,
    department: Array<number | string> | null
}

const initialState: InitialStateType = {
    departments: [],
    department: null
}

export const departmentsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case GET_DEPARTMENTS:
            return {
                ...state,
                departments: action.payload
            }

        case GET_SINGLE_DEPARTMENT:
            return {
                ...state,
                department: action.payload
            }

        default:
            return state
    }
}

export type ThunkType = ThunkAction<void, IRootState, unknown, ActionTypes>

type GetDepartmentsType = {
    type: typeof GET_DEPARTMENTS,
    payload: Array<number | string>
}

const getDepartments = (payload: Array<number | string>): GetDepartmentsType => ({ type: GET_DEPARTMENTS, payload })

type GetSingleDepartmentType = {
    type: typeof GET_SINGLE_DEPARTMENT,
    payload: Array<number | string>
}

const getSingleDepartment = (payload: Array<number | string>): GetSingleDepartmentType => ({ type: GET_SINGLE_DEPARTMENT, payload })

export const getDepartmentsThunk = (): ThunkType => async (dispatch) => {
    const response = await departmentsAPI.getDepartments()
    dispatch(getDepartments(response?.data))
}

export const getSingleDepartmentThunk = (departmentId: number): ThunkType => async (dispatch) => {
    const response = await departmentsAPI.getSingleDepartment(departmentId)
    console.log(response)
    dispatch(getSingleDepartment(response))
}