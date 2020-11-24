import React from "react";
import { Button } from "antd";
import { Input, Tooltip, Radio } from "antd";
import { Select } from "antd";
import { Modal } from "antd";
import "./ReplacePatients.css";

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

const PlaceSelect = () => {
  const { Option } = Select;
  function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }
  return (
    <div className={'select__patients'}>
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
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select>
    </div>
  );
};

export const ReplacePatients = (props) => {
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
      <div className={"replace_patients_modal"}>
        <Modal
          title="Перевод пациентов"
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <h3>Выберите пациента в вашем отделении</h3>
          <RadioGroup />
          <h3 style={{paddingTop: '10px'}}>В какое отделение переводить?</h3>
          <PlaceSelect />
          <h3 style={{paddingTop: '10px'}}>Доступные места в выбранном отделении</h3>
          <RadioGroup />
        </Modal>
      </div>
    </div>
  );
};
