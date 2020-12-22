import { Alert } from "antd";
import './AuthForm.css'

export const AlertWrapper = () => {
    const onClose = (e: string) => {
      console.log(e, "I was closed.");
    };
    return <div className={'AlertWrapper'}>
      <Alert
        message={"Неверный логин или пароль"}
        description="Пожалуйста проверьте правильность введенных данных и повторите попытку"
        type="error"
        closable
      />
    </div>
  }