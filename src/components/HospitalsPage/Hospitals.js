import React from "react";
import emblem from "../Images/emblem_tyumen.png";
import { Button } from "antd";
import "./Hospitals.css";
import { logout } from "../../context/reducers/authReducer";
import { connect } from "react-redux";

const ButtonWrapper = props => {
    return <div className="button_wrapper">
      <Button type="primary" danger onClick={props.logout}>
        Primary
      </Button>
    </div>
}

const Hospitals = (props) => {
  return (
    <div className={"hospitals__header"}>
      <div className={"Preview"}>
        <div>
          <img src={emblem} alt="" />
        </div>
        <div>
          <h1>Информационная система “Коечный фонд - бронирование”</h1>
          <p>Департамент информатизации Тюменской области</p>
        </div>
      </div>
    <ButtonWrapper logout={props.logout}/>
    </div>
  );
};

const mapDispatchToProps = {
    logout
}

export default connect(null, mapDispatchToProps)(Hospitals)