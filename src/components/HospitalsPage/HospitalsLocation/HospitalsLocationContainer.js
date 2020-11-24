import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../../../context/reducers/additionInfoReducer";
import { HospitalsLocation } from "./HospitalsLocation";

export const HospitalsLocationContainer = () => {
    const info = useSelector(state => state.info.info)
    console.log(info)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getInfo(info))
    }, [])
    return <HospitalsLocation info={info} />
};
