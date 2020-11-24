import React from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Modal } from 'antd';
import { PatientDischarge } from './PatientDischarge'

const PatientsButton = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };
  return (
    <div className={"patients_button"}>
      <Button size={"large"} onClick={showModal}>
        {props.title}
      </Button>
      <Modal
          title="Title"
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <p>{modalText}</p>
        </Modal>
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
        <PatientDischarge title={"Выписать пациентов"} />
        <PatientsButtonInfo title={`Места в других отделениях`} />
      </div>
    </div>
  );
};
