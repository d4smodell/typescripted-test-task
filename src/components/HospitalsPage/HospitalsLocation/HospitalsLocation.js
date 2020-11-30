import React, { useEffect } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { AimOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getDepartmentsThunk, getSingleDepartmentThunk } from "../../../context/reducers/departmentsReducer";
import "../Content.css";

export const HospitalsLocation = (props) => {
  const singleDepartment = useSelector((state) => state.departments.department);
  const departments = useSelector(state => state.departments.departments)
  const info = departments?.data

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDepartmentsThunk())  
  }, [dispatch])

  const getDepartment = ({ key }) => {
    dispatch(getSingleDepartmentThunk(key));
  };

  const menu = () => {
    return (
      <div>
        <Menu onClick={(key) => getDepartment(key)}>
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
