import { Button } from "antd";
import './AuthForm.css'

export const ButtonWrapper = () => {
    return <div className={'ButtonWrapper'}>
        <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
        >
            Войти
            </Button>
    </div>
}