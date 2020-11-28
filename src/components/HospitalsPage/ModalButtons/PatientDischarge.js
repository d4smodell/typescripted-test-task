import React, { useEffect } from "react";
import { Form, Button } from "antd";
import { Modal } from "antd";
import { Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { discharge } from "../../../context/reducers/bunkReleaseReducer";
import { getSingleDepartmentThunk } from "../../../context/reducers/departmentsReducer";
import "./PatientsDischarge.css";

export const PatientDischarge = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("Content of the modal");
  const currentDepartment = useSelector(
    (state) => state.departments.department
  );

  useEffect(() => {
    dispatch(getSingleDepartmentThunk)
  })

  const dispatch = useDispatch()

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

  const onFinish = (values) => {
    console.log("Received values of form: ", values.radio);
    dispatch(discharge(values.radio.sex, values.radio.has_oxygen, values.radio.department_id))
  };

  return (
    <div className={"patients_button"}>
      <Button size={"large"} onClick={showModal}>
        {props.title}
      </Button>
      <div className={"discharge_modal"}>
        <Modal
          okText="Сохранить"
          cancelText="Отмена"
          title="Выписка пациентов"
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <p>Выберите пациента для выписки</p>
          <div className={"checkbox_field"}>
            <Form onFinish={onFinish}>
              <Form.Item name="radio">
                <Radio.Group>
                  <div className="checkbox_field">
                    <Radio
                      value={{
                        sex: "MALE",
                        has_oxygen: false,
                        department_id: currentDepartment?.data?.id,
                      }}
                    >
                      Мужчина
                    </Radio>
                    <Radio
                      value={{
                        sex: "MALE",
                        has_oxygen: false,
                        department_id: currentDepartment?.data?.id,
                      }}
                    >
                      Женщина
                    </Radio>
                    <Radio
                      value={{
                        sex: "MALE",
                        has_oxygen: false,
                        department_id: currentDepartment?.data?.id,
                      }}
                    >
                      Мужчина с кислородом
                    </Radio>
                    <Radio
                      value={{
                        sex: "MALE",
                        has_oxygen: false,
                        department_id: currentDepartment?.data?.id,
                      }}
                    >
                      Женщина с кислородом
                    </Radio>
                  </div>
                </Radio.Group>
              </Form.Item>
              <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </div>
    </div>
  );
};
