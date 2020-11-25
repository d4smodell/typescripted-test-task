import React from "react";
import '../Content.css'
import { Menu, Dropdown, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getSingleDepartmentThunk } from "../../../context/reducers/departmentsReducer";


export const HospitalsLocation = props => {
  const singleDepartment = useSelector(state => state.departments.department)

  const dispatch = useDispatch()

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
    dispatch(getSingleDepartmentThunk(key))
  };

  const menu = () => {
    return <div>
      <Menu onClick={onClick}>
        {
          props.info.map(item => {
            return <Menu.Item key={item.id}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
              >
                {item.name}
              </a>
            </Menu.Item>
          })
        }
      </Menu>
    </div>
  }

  return (
    <div className={"container"}>
      <div className={"info_els"}>
        <Dropdown overlay={menu} info={props.info}>
          <a
            href='/'
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
           Выберите отделение <DownOutlined />
          </a>
        </Dropdown>
        <div className={"hospital__location"}>
          <p>
            <PlusCircleOutlined /> ГБУЗ ТО «Госпиталь для ветеранов войн» -
            Котовского, 55/2
          </p>
        </div>
      </div>
    </div>
  );
};
