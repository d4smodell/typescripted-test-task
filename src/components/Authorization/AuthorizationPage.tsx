import LoginForm from "./AuthForm";
import "./AuthorizationPage.css";
import { Preview } from "./Preview";

const AuthorizationPage = () => {
  return (
    <div className="authorization">
      <LoginForm />
      <Preview />
    </div>
  );
};

export default AuthorizationPage;
