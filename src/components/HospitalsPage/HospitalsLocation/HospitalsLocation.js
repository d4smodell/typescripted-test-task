import React from "react";
import "../Content.css";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { AimOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getSingleDepartmentThunk } from "../../../context/reducers/departmentsReducer";

export const HospitalsLocation = (props) => {
  const singleDepartment = useSelector((state) => state.departments.department);
  const departments = useSelector(state => state.departments.departments)
  const info = departments?.data

  const dispatch = useDispatch();

  const onClick = ({ key }) => {
    console.log(`Click on item ${key}`);
    dispatch(getSingleDepartmentThunk(key));
  };

  const menu = () => {
    return (
      <div>
        <Menu onClick={onClick}>
          {info?.map((item) => {
            return <Menu.Item key={item?.id}>{item.name}</Menu.Item>;
          })}
        </Menu>
      </div>
    );
  };

  return (
    <div className={"container"}>
      <div className={"info_els"}>
        <Dropdown overlay={menu} info={info}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            {singleDepartment?.data?.name} <DownOutlined />
          </a>
        </Dropdown>
        <div className={"hospital__location"}>
          <p>
            <AimOutlined /> ГБУЗ ТО «Госпиталь для ветеранов войн» - Котовского,
            55/2
          </p>
        </div>
      </div>
    </div>
  );
};
