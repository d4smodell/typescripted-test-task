import React from "react";
import { Form, Button } from "antd";
import { Modal } from "antd";
import { Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { discharge } from "../../../../context/reducers/bunkReleaseReducer";
import { getSingleDepartmentThunk } from "../../../../context/reducers/departmentsReducer";
import "./PatientsDischarge.css";

export const PatientDischarge = (props) => {
  const [visible, setVisible] = React.useState(false);
  const currentDepartment = useSelector(state => state.departments.department);

  const [form] = Form.useForm();

  const dispatch = useDispatch()

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    form.resetFields()
    setVisible(false);
  };

  const onFinish = (values) => {
    dispatch(discharge(values.radio.sex, values.radio.has_oxygen, values.radio.department_id))
    form.resetFields()
    setVisible(false);
    dispatch(getSingleDepartmentThunk(currentDepartment?.data?.id || 2));
  };

  return (
    <div className={"patients_button"}>
      <Button size={"large"} onClick={showModal}>
        {props.title}
      </Button>
      <div className={"discharge_modal"}>
        <Modal
          footer={null}
          okText="Сохранить"
          cancelText="Отмена"
          title="Выписка пациентов"
          visible={visible}
          onCancel={handleCancel}
        >
          <p>Выберите пациента для выписки</p>
          <div className={"checkbox_field"}>
            <Form form={form} onFinish={onFinish}>
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
              <div style={{display:'flex', float: 'right', padding: '0 20px 0 0'}}>
              <Form.Item wrapperCol={{ span: 13, offset: 6 }}>
                <Button onClick={handleCancel} htmlType="reset">
                  Отмена
                </Button>
              </Form.Item>
              <Form.Item wrapperCol={{ span: 13, offset: 6 }}>
                <Button type="primary" htmlType="submit">
                  Выписать
                </Button>
              </Form.Item>
              </div>
            </Form>
          </div>
        </Modal>
      </div>
    </div>
  );
};
