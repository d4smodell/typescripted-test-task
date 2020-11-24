import React from "react";
import { Button } from "antd";
import { Modal } from "antd";
import { Radio } from "antd";
import "./PatientsDischarge.css";

const RadioGroup = () => {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <div className={"checkbox_field"}>
        <Radio value={1}>Мужчина</Radio>
        <Radio value={2}>Женщина</Radio>
        <Radio value={3}>Мужчина с кислородом</Radio>
        <Radio value={4}>Женщина с кислородом</Radio>
      </div>
    </Radio.Group>
  );
};

export const PatientDischarge = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("Content of the modal");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <div className={"patients_button"}>
      <Button size={"large"} onClick={showModal}>
        {props.title}
      </Button>
      <div className={"discharge_modal"}>
        <Modal
          title="Выписка пациентов"
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <p>Выберите пациента для выписки</p>
          <div className={"checkbox_field"}>
            <RadioGroup />
          </div>
        </Modal>
      </div>
    </div>
  );
};
