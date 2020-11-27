import React, { useEffect } from "react";
import { Button, Form, Radio, Select, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getDepartmentsThunk } from "../../../context/reducers/departmentsReducer";
import "./ReplacePatients.css";
import { getInfo } from "../../../context/reducers/authReducer";
import { replace } from "../../../context/reducers/replaceReducer";

const PlaceSelect = () => {
  const { Option } = Select;
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }
  return (
    <div className={"select__patients"}>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Выберите отделение"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      ></Select>
    </div>
  );
};

export const ReplacePatients = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("Content of the modal");

  const departments = useSelector((state) => state.departments.departments);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDepartmentsThunk());
  }, [dispatch]);

  const info = departments.data;

  const onFinish = ({ radio, radio_second }) => {
    console.log(
      "Received values of form: ",
      radio.from_sex,
      radio.from_has_oxygen,
      radio.from_department_id,
      radio_second.to_sex,
      radio_second.to_has_oxygen,
      radio_second.to_department_id,
      1
    );
    dispatch(getInfo());
    dispatch(
      replace(
        radio.from_sex,
        radio.from_has_oxygen,
        radio.from_department_id,
        radio_second.to_sex,
        radio_second.to_has_oxygen,
        radio_second.to_department_id,
        1
      )
    );
  };

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
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <h3>Выберите пациента в вашем отделении</h3>
          <Form
            name="validate_other"
            onFinish={onFinish}
            initialValues={{
              ["input-number"]: 3,
              ["checkbox-group"]: ["A", "B"],
              rate: 3.5,
            }}
          >
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
            <Form.Item
              name="select"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Выберите отделение",
                },
              ]}
            >
              <Select placeholder="Выберите отделение">
                {info?.map((item) => {
                  return <Option value={item.name}>{item.name}</Option>;
                })}
              </Select>
            </Form.Item>

            <Form.Item name="radio_second">
              <Radio.Group>
                <div className="radioGroup">
                  <Radio
                    value={{
                      to_sex: "MALE",
                      to_has_oxygen: false,
                      to_department_id: currentDepartment?.data?.id,
                    }}
                  >
                    Мужчина
                  </Radio>
                  <Radio
                    value={{
                      to_sex: "FEMALE",
                      to_has_oxygen: false,
                      to_department_id: currentDepartment?.data?.id,
                    }}
                  >
                    Женщина
                  </Radio>
                  <Radio
                    value={{
                      to_sex: "MALE",
                      to_has_oxygen: true,
                      to_department_id: currentDepartment?.data?.id,
                    }}
                  >
                    Мужчина с кислородом
                  </Radio>
                  <Radio
                    value={{
                      to_sex: "FEMALE",
                      to_has_oxygen: true,
                      to_department_id: currentDepartment?.data?.id,
                    }}
                  >
                    Женщина с кислородом
                  </Radio>
                </div>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 6,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};
