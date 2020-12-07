import React, { useCallback, useEffect } from "react";
import { logout } from "../../context/reducers/authReducer";
import { connect, useDispatch, useSelector } from "react-redux";
import { Header } from "./Header/Header";
import { PlacesInfo } from "./PlacesInfo/PlacesInfo";
import { ModalButtons } from "./ModalButtons/ModalButtons";
import { SortedPlaces } from "./SortedPlaces/SortedPlaces";
import { HospitalsLocation } from "./HospitalsLocation/HospitalsLocation";
import { Spin } from "antd";
import { getSingleDepartmentThunk } from "../../context/reducers/departmentsReducer";
import "./Content.css";

const Hospitals = (props) => {
  const currentDepartment = useSelector(
    (state) => state.departments.department
  );

  const dispatch = useDispatch();
  const handler = useCallback(() => {
    dispatch(getSingleDepartmentThunk(currentDepartment?.data?.id || 2));
  }, [dispatch, currentDepartment?.data?.id]);

  useEffect(() => {
    handler();
  }, [handler]);

  return (
    <>
      <Header logout={props.logout} />
      {currentDepartment?.data?.id ? (
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
