import React, { useCallback, useEffect, useState } from "react";
import { logout } from "../../context/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./Header/Header";
import { PlacesInfo } from "./PlacesInfo/PlacesInfo";
import { ModalButtons } from "./ModalButtons/ModalButtons";
import { SortedPlaces } from "./SortedPlaces/SortedPlaces";
import { HospitalsLocation } from "./HospitalsLocation/HospitalsLocation";
import { Spin } from "antd";
import { getDepartmentsThunk, getSingleDepartmentThunk } from "../../context/reducers/departmentsReducer";
import "./Content.css";

const Hospitals = () => {
  const currentDepartment = useSelector((state: any) => state.departments.department);
  const departments = useSelector((state: any) => state.departments.departments)
  const [, setSpin] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDepartmentsThunk())
  }, [dispatch])

  const handler = useCallback(() => {
    if(departments) {
      dispatch(getSingleDepartmentThunk(currentDepartment?.id || departments[0]?.id));
    } else {
      setSpin(true)
    }
  }, [currentDepartment?.id, departments, dispatch]);

  useEffect(() => {
    handler();
  }, [handler]);

  return (
    <>
      <Header logout={() => dispatch(logout)} />
      {departments ? (
        <div className="container">
          <HospitalsLocation />
          <PlacesInfo />
          <ModalButtons />
          <SortedPlaces />
        </div>
      ) : (
        <div style={{
          margin: '0 auto',
          textAlign: 'center',
          padding: '20px'
        }}>
          <Spin />
        </div>
      )}
    </>
  );
};

export default Hospitals