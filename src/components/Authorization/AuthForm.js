import { Form, Input } from "antd";
import { UserOutlined, LockOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { connect, useSelector } from "react-redux";
import { login } from "../../context/reducers/authReducer";
import { useState } from "react";
import './AuthForm.css'
import { AlertWrapper } from "./Alert";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { ButtonWrapper } from "./Button";

const LoginForm = (props) => {
  const isAuth = useSelector(state => state.login.isAuth);
  const error = useSelector(state => state.login.error)
  const [alert, setAlert] = useState(false);
console.log(error)
  const onFinish = (payload) => {
    console.log("Received values of form: ", payload);
    props.login(payload.username, payload.password);

    if (!isAuth) {
      setAlert(true);
    }
  };

  const FormWrapper = () => {
    return <div className={'FormWrapper'}>
      <h2>Вход</h2>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Необходимо ввести логин!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Введите логин"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Необходимо ввести пароль!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Введите пароль"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>

        <Form.Item>
          <ButtonWrapper />
        </Form.Item>
        <Form.Item>
          <p><InfoCircleOutlined />Не можете войти?</p>
          <p>
          Свяжитесь с технической поддержкой<br/>
          по номеру телефона
          <span className={"phoneNumber"}>72-72-72</span>
          </p>
        </Form.Item>
      </Form>
      {alert ? <AlertWrapper /> : null}
    </div>
  }

  return <FormWrapper />
};

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(LoginForm);