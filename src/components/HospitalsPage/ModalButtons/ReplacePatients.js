import { useState } from "react";
import { Button, Form, Radio, Select, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../../../context/reducers/authReducer";
import { replace } from "../../../context/reducers/replaceReducer";
import "./ReplacePatients.css";

export const ReplacePatients = (props) => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const [visible, setVisible] = useState(false);
  const departments = useSelector((state) => state.departments.departments);
  const dispatch = useDispatch();
  const info = departments.data;

  const onFinish = ({ radio, radio_second, select }) => {
    const payload = {
      from_sex: radio.from_sex,
      from_has_oxygen: radio.from_has_oxygen,
      from_department_id: radio.from_department_id,
      to_sex: radio_second.to_sex,
      to_has_oxygen: radio_second.to_has_oxygen,
      to_department_id: select,
      count: 1,
    };
    dispatch(getInfo());
    dispatch(replace(payload));
    form.resetFields();
    setVisible(false);
  };

  const showModal = () => {
    setVisible(true);
  };

  const cancelHandler = () => {
    form.resetFields();
    setVisible(false);
  };

  const currentDepartment = useSelector(
    (state) => state.departments.department
  );

  return (
    <div className={"patients_button"}>
      <Button size={"large"} onClick={showModal}>
        {props.title}
      </Button>
      <div className={"replace_patients_modal"}>
        <Modal
          okText="Сохранить"
          cancelText="Отмена"
          title="Перевод пациентов"
          visible={visible}
          footer={[null]}
        >
          <h3>Выберите пациента в вашем отделении</h3>
          <Form form={form} name="validate_other" onFinish={onFinish}>
            <Form.Item name="radio">
              <Radio.Group>
                <div className="radioGroup">
                  <Radio
                    value={{
                      from_sex: "MALE",
                      from_has_oxygen: false,
                      from_department_id: currentDepartment?.data?.id,
                    }}
                  >
                    Мужчина
                  </Radio>
                  <Radio
                    value={{
                      from_sex: "FEMALE",
                      from_has_oxygen: false,
                      from_department_id: currentDepartment?.data?.id,
                    }}
                  >
                    Женщина
                  </Radio>
                  <Radio
                    value={{
                      from_sex: "MALE",
                      from_has_oxygen: true,
                      from_department_id: currentDepartment?.data?.id,
                    }}
                  >
                    Мужчина с кислородом
                  </Radio>
                  <Radio
                    value={{
                      from_sex: "FEMALE",
                      from_has_oxygen: true,
                      from_department_id: currentDepartment?.data?.id,
                    }}
                  >
                    Женщина с кислородом
                  </Radio>
                </div>
              </Radio.Group>
            </Form.Item>
            <p>В какое отделение переводить?</p>
            <div className="customSelect">
              <Form.Item
                name="select"
                rules={[
                  {
                    required: true,
                    message: "Выберите отделение",
                  },
                ]}
              >
                <Select placeholder="Выберите отделение">
                  {info?.map((item) => {
                    return (
                      <Option key={item.id} value={item.id}>
                        {item.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </div>

            <Form.Item name="radio_second">
              <Radio.Group>
                <div className="radioGroup">
                  <Radio
                    value={{
                      to_sex: "MALE",
                      to_has_oxygen: false,
                    }}
                  >
                    Мужчина
                  </Radio>
                  <Radio
                    value={{
                      to_sex: "FEMALE",
                      to_has_oxygen: false,
                    }}
                  >
                    Женщина
                  </Radio>
                  <Radio
                    value={{
                      to_sex: "MALE",
                      to_has_oxygen: true,
                    }}
                  >
                    Мужчина с кислородом
                  </Radio>
                  <Radio
                    value={{
                      to_sex: "FEMALE",
                      to_has_oxygen: true,
                    }}
                  >
                    Женщина с кислородом
                  </Radio>
                </div>
              </Radio.Group>
            </Form.Item>
            <div style={{ display: "flex", padding: "0 0 0 210px" }}>
              <Form.Item
                wrapperCol={{
                  span: 12,
                  offset: 6,
                }}
              >
                <Button onClick={cancelHandler} htmlType="reset">
                  Отмена
                </Button>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  span: 12,
                  offset: 6,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Перевести
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Modal>
      </div>
    </div>
  );
};
