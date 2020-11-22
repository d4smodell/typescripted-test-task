import React from "react";
import '../Content.css'
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { PlusCircleOutlined  } from "@ant-design/icons";


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

export const HospitalsLocation = () => {
  return (
    <div className={"container"}>
      <div className={"info_els"}>
        <Dropdown overlay={menu}>
          <a
            href="/"
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
            Стационарное Отделение <DownOutlined />
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
