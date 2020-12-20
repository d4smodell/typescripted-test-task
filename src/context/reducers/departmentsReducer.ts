import { Dispatch } from "react"
import { departmentsAPI } from "../../api/api"
import { GET_DEPARTMENTS, GET_SINGLE_DEPARTMENT } from "../types"

type ActionTypes = GetDepartmentsType | GetSingleDepartmentType

type InitialStateType = {
    departments: Array<any> | null,
    department: string | null
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

type GetDepartmentsType = {
    type: typeof GET_DEPARTMENTS,
    payload: Array<any>
}

const getDepartments = (payload: Array<any>): GetDepartmentsType => ({ type: GET_DEPARTMENTS, payload })

type GetSingleDepartmentType = {
    type: typeof GET_SINGLE_DEPARTMENT,
    payload: string
}

const getSingleDepartment = (payload: string): GetSingleDepartmentType => ({ type: GET_SINGLE_DEPARTMENT, payload })

export const getDepartmentsThunk = () => async (dispatch: Dispatch<GetDepartmentsType>) => {
    const response = await departmentsAPI.getDepartments()
    dispatch(getDepartments(response))
}

export const getSingleDepartmentThunk = (departmentId: number) => async (dispatch: Dispatch<GetSingleDepartmentType>) => {
    const response = await departmentsAPI.getSingleDepartment(departmentId)
    dispatch(getSingleDepartment(response))
}