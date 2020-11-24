import React from "react";
import { logout } from "../../context/reducers/authReducer";
import { connect } from "react-redux";
import { Header } from "./Header/Header";
import { PlacesInfo } from "./PlacesInfo/PlacesInfo";
import { ModalButtons } from "./ModalButtons/ModalButtons";
import { SortedPlaces } from "./SortedPlaces/SortedPlaces";
import { HospitalsLocationContainer } from "./HospitalsLocation/HospitalsLocationContainer";
import "./Content.css";

const Hospitals = (props) => {
  return (
    <>
      <Header logout={props.logout} />
      <div className="container">
        <HospitalsLocationContainer />
        <PlacesInfo />
        <ModalButtons />
        <SortedPlaces />
      </div>
    </>
  );
};

const mapDispatchToProps = {
  logout,
};

export default connect(null, mapDispatchToProps)(Hospitals);
