import React from "react";
import { Button } from "antd";
import { Input, Tooltip } from "antd";
import { Modal } from "antd";
import { Radio } from "antd";
import "./PlacesCount.css";

export const PlacesCount = (props) => {
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
      <div className={"places_count_modal"}>
        <Modal
          title="Редактирование мест"
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          okText="Сохранить"
          cancelText="Отмена"
        >
          <h3>Мужские</h3>
          <div className={"places_settings"}>
            <div>
              <div style={{ width: "216px" }}>
                <label>Всего</label>
                <Input placeholder="" />
              </div>
            </div>
            <div style={{ width: "216px" }}>
              <div>
                <label>Занято</label>
                <Input placeholder="" />
              </div>
            </div>
          </div>

          <h3>Женские</h3>
          <div className={"places_settings"}>
            <div>
              <div style={{ width: "216px" }}>
                <label>Всего</label>
                <Input placeholder="" />
              </div>
            </div>
            <div style={{ width: "216px" }}>
              <div>
                <label>Занято</label>
                <Input placeholder="" />
              </div>
            </div>
          </div>

          <h3>Мужские с кислородом</h3>
          <div className={"places_settings"}>
            <div>
              <div style={{ width: "216px" }}>
                <label>Всего</label>
                <Input placeholder="" />
              </div>
            </div>
            <div style={{ width: "216px" }}>
              <div>
                <label>Занято</label>
                <Input placeholder="" />
              </div>
            </div>
          </div>

          <h3>Женские с кислородом</h3>
          <div className={"places_settings"}>
            <div>
              <div style={{ width: "216px" }}>
                <label>Всего</label>
                <Input placeholder="" />
              </div>
            </div>
            <div style={{ width: "216px" }}>
              <div>
                <label>Занято</label>
                <Input placeholder="" />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
