import { Form, Input } from "antd";
import { UserOutlined, LockOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { connect, useDispatch, useSelector } from "react-redux";
import { getInfo, login } from "../../context/reducers/authReducer";
import { useState } from "react";
import { AlertWrapper } from "./Alert";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { ButtonWrapper } from "./Button";
import { useHistory } from "react-router-dom";
import { getSingleDepartmentThunk } from "../../context/reducers/departmentsReducer";
import "./AuthForm.css";

const LoginForm = (props) => {
  const [alert, setAlert] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch()

  const currentDepartment = useSelector(state => state.departments)
  
  const onFinish = (payload) => {
    try {
      const { username } = localStorage;
      props.login(payload.username, payload.password);
      props.getInfo();
      if (username) {
        history.push("/hospitals");
      } 
      dispatch(getSingleDepartmentThunk(currentDepartment?.data?.id))
    } catch(e) {
      if(e) {
        setAlert(true);
      }
    }
  };

  const FormWrapper = () => {
    return (
      <div className={"FormWrapper"}>
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
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          <Form.Item>
            <ButtonWrapper />
          </Form.Item>
          <Form.Item>
            <p>
              <InfoCircleOutlined />
              Не можете войти?
            </p>
            <p>
              Свяжитесь с технической поддержкой
              <br />
              по номеру телефона
              <span className={"phoneNumber"}>72-72-72</span>
            </p>
          </Form.Item>
        {alert && <AlertWrapper />}
        </Form>
      </div>
    );
  };

  return <FormWrapper />;
};

const mapDispatchToProps = {
  login,
  getInfo,
};

export default connect(null, mapDispatchToProps)(LoginForm);
