import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

export const LogoutButton = (props) => {
  const history = useHistory()
  const loggingOut = () => {
    localStorage.clear()
    return history.push('/')
  }
  return (
    <div className={"HospitalsLogoutButtonWrapper"}>
      <Button
        onClick={loggingOut}
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
