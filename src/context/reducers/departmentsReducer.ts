import { Dispatch } from "react"
import { departmentsAPI } from "../../api/api"
import { GET_DEPARTMENTS, GET_SINGLE_DEPARTMENT } from "../types"

type ActionTypes = GetDepartmentsType | GetSingleDepartmentType

type InitialStateType = {
    departments: Array<any> | null,
    department: any | null
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
    payload: any
}

const getDepartments = (payload: any): GetDepartmentsType => ({ type: GET_DEPARTMENTS, payload })

type GetSingleDepartmentType = {
    type: typeof GET_SINGLE_DEPARTMENT,
    payload: any
}

const getSingleDepartment = (payload: any): GetSingleDepartmentType => ({ type: GET_SINGLE_DEPARTMENT, payload })

export const getDepartmentsThunk = () => async (dispatch: Dispatch<GetDepartmentsType>) => {
    const response = await departmentsAPI.getDepartments()
    console.log(response)
    dispatch(getDepartments(response.data))
}

export const getSingleDepartmentThunk = (departmentId: number) => async (dispatch: Dispatch<GetSingleDepartmentType>) => {
    const response = await departmentsAPI.getSingleDepartment(departmentId)
    console.log(response)
    dispatch(getSingleDepartment(response.data))
}