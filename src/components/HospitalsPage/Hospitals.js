import React from "react";
import { logout } from "../../context/reducers/authReducer";
import { connect } from "react-redux";
import { Header } from "./Header/Header";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./Content.css";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const Hospitals = (props) => {
  return (
    <>
      <Header logout={props.logout} />
      <div className={"container"}>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Стационарное Отделение <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  logout,
};

export default connect(null, mapDispatchToProps)(Hospitals);
