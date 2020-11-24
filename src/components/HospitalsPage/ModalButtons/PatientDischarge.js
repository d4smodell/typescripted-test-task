import React from "react";
import { Button } from "antd";
import { Modal } from 'antd';

export const PatientDischarge = (props) => {
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
            title={props.title}
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <p>Выписка пациентов</p>
          </Modal>
      </div>
    );
  };