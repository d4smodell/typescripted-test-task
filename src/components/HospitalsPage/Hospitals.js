import React from "react";
import { logout } from "../../context/reducers/authReducer";
import { connect } from "react-redux";
import { Header } from "./Header/Header";
import { HospitalsLocation } from "./HospitalsLocation/HospitalsLocation";
import { PlacesInfo } from "./PlacesInfo/PlacesInfo";
import { InfoCircleOutlined } from '@ant-design/icons';
import "./Content.css";
import { Button } from 'antd';

const PatientsButton = props => {
  return <div className={'patients_button'}>
    <Button size={'large'} type="primary">{props.title}</Button>
  </div>
}

const PatientsButtonInfo = props => {
  return <div className={'patients_button'}>
    <Button size={'large'} type="primary"><InfoCircleOutlined />{props.title}</Button>
  </div>
}

const Hospitals = (props) => {
  return (
    <>
      <Header logout={props.logout} />
      <div className="container">
        <HospitalsLocation />
        <PlacesInfo />
        <div className={"patients_container"}>
        <div className={"patients_actions"}>
        <PatientsButton title={'Изменить число мест'}/>
        <PatientsButton title={'Перевести пациентов'}/>
        <PatientsButton title={'Выписать пациентов'}/>
        <PatientsButtonInfo title={`Места в других отделениях`}/>
        </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  logout,
};

export default connect(null, mapDispatchToProps)(Hospitals);
