import React, { useCallback, useEffect, useState } from "react";
import { logout } from "../../context/reducers/authReducer";
import { connect, useDispatch, useSelector } from "react-redux";
import { Header } from "./Header/Header";
import { PlacesInfo } from "./PlacesInfo/PlacesInfo";
import { ModalButtons } from "./ModalButtons/ModalButtons";
import { SortedPlaces } from "./SortedPlaces/SortedPlaces";
import { HospitalsLocation } from "./HospitalsLocation/HospitalsLocation";
import { Spin } from "antd";
import { getDepartmentsThunk, getSingleDepartmentThunk } from "../../context/reducers/departmentsReducer";
import "./Content.css";

const Hospitals = (props) => {
  const currentDepartment = useSelector(state => state.departments.department);
  const departments = useSelector(state => state.departments.departments)
  const [spin, setSpin] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDepartmentsThunk())
  }, [dispatch])

  const handler = useCallback(() => {
    if(departments?.data) {
      dispatch(getSingleDepartmentThunk(currentDepartment?.data?.id || departments?.data[0].id));
    } else {
      setSpin(true)
    }
  }, [dispatch, currentDepartment?.data?.id, departments?.data]);

  useEffect(() => {
    handler();
  }, [handler]);

  return (
    <>
      <Header logout={props.logout} />
      {departments?.data ? (
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

const mapDispatchToProps = {
  logout,
};

export default connect(null, mapDispatchToProps)(Hospitals);
