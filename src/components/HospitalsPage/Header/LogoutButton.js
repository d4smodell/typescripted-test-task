import React from "react";
import { Button } from "antd";

export const LogoutButton = (props) => {
  return (
    <div className={"HospitalsLogoutButtonWrapper"}>
      <Button
        onClick={props.logout}
        danger
        size={"large"}
        type="primary"
        htmlType="submit"
        className="login-form-button"
      >
        Выйти
      </Button>
    </div>
  );
};
