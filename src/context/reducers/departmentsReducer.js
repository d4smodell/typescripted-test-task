import { departmentsAPI } from "../../api/api"
import { GET_DEPARTMENTS, GET_SINGLE_DEPARTMENT } from "../types"

const initialState = {
    departments: [],
    department: null
}

export const departmentsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DEPARTMENTS:
            return {
                ...state,
                departments: action.departments
            }
        
        case GET_SINGLE_DEPARTMENT:
            return {
                ...state,
                department: action.department
            }

        default:
            return state
    }
}

const getDepartments = payload => ({type: GET_DEPARTMENTS, departments: payload})
const getSingleDepartment = payload => ({type: GET_SINGLE_DEPARTMENT, department: payload})

export const getDepartmentsThunk = () => async dispatch => {
    const response = await departmentsAPI.getDepartments()
    dispatch(getDepartments(response))
}

export const getSingleDepartmentThunk = departmentId => async dispatch => {
    const response = await departmentsAPI.getSingleDepartment(departmentId)
    console.log(response)
    dispatch(getSingleDepartment(response))
}