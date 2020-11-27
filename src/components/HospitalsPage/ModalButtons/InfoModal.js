import React from "react";
import { Button } from "antd";
import { Modal } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import "./PlacesCount.css";

export const InfoModal = (props) => {
  const otherDepartment = useSelector((state) => state.departments.departments);
  const currentDepartment = useSelector(
    (state) => state.departments.department
  );

  const filtered = otherDepartment?.data?.filter(
    (item) => item.id !== currentDepartment?.data?.id
  );
  console.log(filtered);

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
        <InfoCircleOutlined />
        {props.title}
      </Button>
      <div className={"discharge_modal"}>
        <Modal
          okText="Сохранить"
          cancelText="Отмена"
          title="Информация о других отделениях"
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          {filtered?.map((item) => {
            console.log(item?.id);
            return (
              <div style={{ margin: "0 auto" }} key={item?.id}>
                <h1>{item?.name}</h1>
                <div style={{ display: "flex" }}>
                  <div>
                    <h2>Мужские</h2>
                    <div className={""}>
                      <div>
                        <div style={{ width: "216px" }}>
                          <label>Всего </label>
                          <span style={{ color: "#1890FF" }}>
                            {item?.count_male_busy + item?.count_male_free}
                          </span>
                        </div>
                      </div>
                      <div style={{ width: "216px" }}>
                        <div>
                          <label>Занято </label>
                          <span style={{ color: "#1890FF" }}>
                            {item?.count_male_busy}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2>Женские</h2>
                    <div className={""}>
                      <div>
                        <div style={{ width: "216px" }}>
                          <label>Всего </label>
                          <span style={{ color: "#1890FF" }}>
                            {item?.count_female_busy + item?.count_female_free}
                          </span>
                        </div>
                      </div>
                      <div style={{ width: "216px" }}>
                        <div>
                          <label>Занято </label>
                          <span style={{ color: "#1890FF" }}>
                            {item?.count_female_busy}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div style={{ display: "flex" }}>
                  <div>
                    <h2>Мужские с кислородом</h2>
                    <div className={""}>
                      <div>
                        <div style={{ width: "216px" }}>
                          <label>Всего </label>
                          <span style={{ color: "#1890FF" }}>
                            {item?.count_male_o2_busy +
                              item?.count_male_o2_free}
                          </span>
                        </div>
                      </div>
                      <div style={{ width: "216px" }}>
                        <div>
                          <label>Занято </label>
                          <span style={{ color: "#1890FF" }}>
                            {item?.count_male_o2_busy}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2>Женские с кислородом</h2>
                    <div className={""}>
                      <div>
                        <div style={{ width: "216px" }}>
                          <label>Всего </label>
                          <span style={{ color: "#1890FF" }}>
                            {item?.count_female_o2_busy +
                              item?.count_female_o2_free}
                          </span>
                        </div>
                      </div>
                      <div style={{ width: "216px" }}>
                        <div>
                          <label>Занято </label>
                          <span style={{ color: "#1890FF" }}>
                            {item?.count_female_o2_busy}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Modal>
      </div>
    </div>
  );
};
