import { Button } from "antd";
import "./AuthForm.css";

export const ButtonWrapper = props => {
  return (
    <div className={"ButtonWrapper"}>
      <Button
        size={"large"}
        type="primary"
        htmlType="submit"
        className="login-form-button"
      >
        Войти
      </Button>
    </div>
  );
};
