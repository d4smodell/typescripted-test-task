import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

export const LogoutButton = (props) => {
  const history = useHistory()
  const logout = () => {
    localStorage.clear()
    history.push('/')
  }
  return (
    <div className={"HospitalsLogoutButtonWrapper"}>
      <Button
        onClick={logout}
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
