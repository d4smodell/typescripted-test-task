import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDepartmentsThunk } from "../../../context/reducers/departmentsReducer";
import { HospitalsLocation } from "./HospitalsLocation";

export const HospitalsLocationContainer = () => {
    const departments = useSelector(state => state.departments.departments)
    console.log(departments)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getDepartmentsThunk())
    }, [dispatch])
    return <HospitalsLocation info={departments.data} />
};
