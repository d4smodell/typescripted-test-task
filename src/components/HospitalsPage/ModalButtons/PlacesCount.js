import React from "react";
import { Modal, message, Input, Space, Form, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeHospitalPlacesThunk } from "../../../context/reducers/hospitalPlacesReducer";
import "./PlacesCount.css";

export const PlacesCount = (props) => {
  const currentDepartment = useSelector(state => state.departments.department)
  const [visible, setVisible] = React.useState(false);
  const dispatch = useDispatch()

  const alertMessage = useSelector(state => state.places.alertMessage)

  const showModal = () => {
    setVisible(true);
  };

  const success = alertMessage => {
    message.success(alertMessage);
  };

  const error = () => {
    message.error(alertMessage);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const onFinish = ({count_female_busy, count_female_o2_busy, count_female_free, count_female_o2_free, count_male_busy, count_male_o2_busy, count_male_free, count_male_o2_free}) => {
    console.log('Received values of form: ', currentDepartment.data.id, count_female_busy, count_female_o2_busy, count_female_free, count_female_o2_free, count_male_busy, count_male_o2_busy, count_male_free, count_male_o2_free);
    dispatch(changeHospitalPlacesThunk(currentDepartment.data.id, count_female_busy, count_female_o2_busy, count_female_free, count_female_o2_free, count_male_busy, count_male_o2_busy, count_male_free, count_male_o2_free))
    success(alertMessage)
    setVisible(false);
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    error()
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
          onCancel={handleCancel}
          cancelText="Отмена"
        >
          <Form
            name="places_count"
            onFinish={onFinish}
            initialValues={{
              remember: true,
            }}
            onFinishFailed={onFinishFailed}>
            <h3>Мужские</h3>
            <div className={"places_settings"}>
              <div>
                <div style={{ width: "216px" }}>
                  <label>Свободно</label>
                  <Form.Item name={'count_male_free'}>
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              </div>
              <div style={{ width: "216px" }}>
                <div>
                  <label>Занято</label>
                  <Form.Item name={'count_male_busy'}>
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              </div>
            </div>

            <h3>Женские</h3>
            <div className={"places_settings"}>
              <div>
                <div style={{ width: "216px" }}>
                  <label>Свободно</label>
                  <Form.Item name={'count_female_free'} rules={[{ required: true }]}>
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              </div>
              <div style={{ width: "216px" }}>
                <div>
                  <label>Занято</label>
                  <Form.Item name={'count_female_busy'}>
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              </div>
            </div>

            <h3>Мужские с кислородом</h3>
            <div className={"places_settings"}>
              <div>
                <div style={{ width: "216px" }}>
                  <label>Свободно</label>
                  <Form.Item name={'count_male_o2_free'}>
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              </div>
              <div style={{ width: "216px" }}>
                <div>
                  <label>Занято</label>
                  <Form.Item name={'count_male_o2_busy'}>
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              </div>
            </div>

            <h3>Женские с кислородом</h3>
            <div className={"places_settings"}>
              <div>
                <div style={{ width: "216px" }}>
                  <label>Свободно</label>
                  <Form.Item name={'count_female_o2_free'}>
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              </div>
              <div style={{ width: "216px" }}>
                <div>
                  <label>Занято</label>
                  <Form.Item name={'count_female_o2_busy'}>
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              </div>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Сохранить
              </Button>
              </Form.Item>
            </div>
          </Form>
        </Modal>
      </div>
    </div>
  );
};
