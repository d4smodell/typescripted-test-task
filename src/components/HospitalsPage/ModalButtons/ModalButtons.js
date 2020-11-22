import React from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

const PatientsButton = (props) => {
  return (
    <div className={"patients_button"}>
      <Button size={"large"}>
        {props.title}
      </Button>
    </div>
  );
};

const PatientsButtonInfo = (props) => {
  return (
    <div className={"patients_button"}>
      <Button size={"large"}>
        <InfoCircleOutlined />
        {props.title}
      </Button>
    </div>
  );
};

export const ModalButtons = (props) => {
  return (
    <div className={"patients_container"}>
      <div className={"patients_actions"}>
        <PatientsButton title={"Изменить число мест"} />
        <PatientsButton title={"Перевести пациентов"} />
        <PatientsButton title={"Выписать пациентов"} />
        <PatientsButtonInfo title={`Места в других отделениях`} />
      </div>
    </div>
  );
};
