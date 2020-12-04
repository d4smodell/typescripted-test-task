import React from "react";
import { Modal, message, Input, Form, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeHospitalPlacesThunk } from "../../../context/reducers/hospitalPlacesReducer";
import "./PlacesCount.css";
import { getSingleDepartmentThunk } from "../../../context/reducers/departmentsReducer";

export const PlacesCount = (props) => {
  const [form] = Form.useForm();

  const currentDepartment = useSelector(
    (state) => state.departments.department
  );
  const [visible, setVisible] = React.useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setVisible(true);
  };

  const error = () => {
    message.error("ERROR");
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  const onFinish = ({
    count_female_busy,
    count_female_o2_busy,
    count_female_free,
    count_female_o2_free,
    count_male_busy,
    count_male_o2_busy,
    count_male_free,
    count_male_o2_free,
  }) => {
    const payload = {
      department_id: currentDepartment?.data?.id,
      count_female_busy,
      count_female_o2_busy,
      count_female_free,
      count_female_o2_free,
      count_male_busy,
      count_male_o2_busy,
      count_male_free,
      count_male_o2_free,
    };
    dispatch(changeHospitalPlacesThunk(payload));
    dispatch(getSingleDepartmentThunk(currentDepartment?.data?.id || 2));
    form.resetFields();
    setVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    error();
  };

  const maleValidation = (rule, value, callback) => {
    if (
      value >
      currentDepartment?.data?.count_male_busy +
        currentDepartment?.data?.count_male_free
    ) {
      console.log("Wrong value");
    } else if (!value) {
      console.log("Enter value");
    } else {
      callback();
    }
  };

  const femaleValidation = (rule, value, callback) => {
    if (
      value >
      currentDepartment?.data?.count_female_busy +
        currentDepartment?.data?.count_female_free
    ) {
      console.log("Wrong value");
    } else if (!value) {
      console.log("Enter value");
    } else {
      callback();
    }
  };

  const maleO2Validation = (rule, value, callback) => {
    if (
      value >
      currentDepartment?.data?.count_male_o2_busy +
        currentDepartment?.data?.count_male_o2_free
    ) {
      console.log("Wrong value");
    } else if (!value) {
      console.log("Enter value");
    } else {
      callback();
    }
  };

  const femaleO2Validation = (rule, value, callback) => {
    if (
      value >
      currentDepartment?.data?.count_female_o2_busy +
        currentDepartment?.data?.count_female_o2_free
    ) {
      console.log("Wrong value");
    } else if (!value) {
      console.log("Enter value");
    } else {
      callback();
    }
  };

  return (
    <div className={"patients_button"}>
      <Button size={"large"} onClick={showModal}>
        {props.title}
      </Button>
      <div className={"places_count_modal"}>
        <Modal
          footer={null}
          title="Редактирование мест"
          visible={visible}
          onCancel={handleCancel}
          cancelText="Отмена"
        >
          <Form
            form={form}
            name="places_count"
            onFinish={onFinish}
            initialValues={{
              remember: false,
            }}
            onFinishFailed={onFinishFailed}
          >
            <h3>Мужские</h3>
            <div className={"places_settings"}>
              <div>
                <div style={{ width: "216px", padding: "0 10px 0 0px" }}>
                  <label>Свободно</label>
                  <Form.Item
                    name={"count_male_free"}
                    rules={[
                      { required: true, min: 1, validator: maleValidation },
                    ]}
                  >
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              </div>
              <div style={{ width: "216px", padding: "10 0px 0 0px" }}>
                <div>
                  <label>Занято</label>
                  <Form.Item
                    name={"count_male_busy"}
                    rules={[
                      { required: true, min: 1, validator: maleValidation },
                    ]}
                  >
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              </div>
            </div>

            <h3>Женские</h3>
            <div className={"places_settings"}>
              <div>
                <div style={{ width: "216px", padding: "0 10px 0 0px" }}>
                  <label>Свободно</label>
                  <Form.Item
                    name={"count_female_free"}
                    rules={[
                      { required: true, min: 1, validator: femaleValidation },
                    ]}
                  >
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              </div>
              <div style={{ width: "216px", padding: "10 0px 0 0px" }}>
                <div>
                  <label>Занято</label>
                  <Form.Item
                    name={"count_female_busy"}
                    rules={[
                      { required: true, min: 1, validator: femaleValidation },
                    ]}
                  >
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              </div>
            </div>

            <h3>Мужские с кислородом</h3>
            <div className={"places_settings"}>
              <div>
                <div style={{ width: "216px", padding: "0 10px 0 0px" }}>
                  <label>Свободно</label>
                  <Form.Item
                    name={"count_male_o2_free"}
                    rules={[
                      { required: true, min: 1, validator: maleO2Validation },
                    ]}
                  >
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              </div>
              <div style={{ width: "216px", padding: "10 0px 0 0px" }}>
                <div>
                  <label>Занято</label>
                  <Form.Item
                    name={"count_male_o2_busy"}
                    rules={[
                      { required: true, min: 1, validator: maleO2Validation },
                    ]}
                  >
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              </div>
            </div>

            <h3>Женские с кислородом</h3>
            <div className={"places_settings"}>
              <div>
                <div style={{ width: "216px", padding: "0 10px 0 0px" }}>
                  <label>Свободно</label>
                  <Form.Item
                    name={"count_female_o2_free"}
                    rules={[
                      { required: true, min: 1, validator: femaleO2Validation },
                    ]}
                  >
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              </div>
              <div style={{ width: "216px", padding: "10 0px 0 0px" }}>
                <div>
                  <label>Занято</label>
                  <Form.Item
                    name={"count_female_o2_busy"}
                    rules={[
                      { required: true, min: 1, validator: femaleO2Validation },
                    ]}
                  >
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", margin: "0 220px 0 " }}>
              <div className="form_btn">
                <Form.Item>
                  <Button
                    htmlType="reset"
                    className="cancelbtn"
                    onClick={handleCancel}
                  >
                    Отмена
                  </Button>
                </Form.Item>
              </div>
              <div className="form_btn">
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Сохранить
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </Modal>
      </div>
    </div>
  );
};
