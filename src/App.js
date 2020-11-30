import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import AuthorizationPage from "./components/Authorization/AuthorizationPage";
import Hospitals from "./components/HospitalsPage/Hospitals";
import { getDepartmentsThunk, getSingleDepartmentThunk } from "./context/reducers/departmentsReducer";
import "./index.css";

function App() {
  const currentDepartment = useSelector((state) => state.departments.department);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDepartmentsThunk());
  }, [dispatch]);

  const depData = useRef(currentDepartment?.data)
  console.log(depData.current)
  console.log(currentDepartment)

  useEffect(() => {
    dispatch(getSingleDepartmentThunk(depData.current?.id || 2));
  }, [dispatch]);

  const isAuth = localStorage.access && localStorage.username && localStorage.refresh;
  // const isAuth = useSelector(state => state.login.isAuth)
  return (
    <BrowserRouter className="App">
      {/* {!localStorage.getItem('token') ? <Redirect from='/hospitals' to='/' /> : ''}   */}
      {!isAuth ? <Redirect to="/" /> : <Redirect to="/hospitals" />}
      {isAuth ? (
        <Route path="/hospitals" render={() => <Hospitals />} />
      ) : (
        <Route path="/" render={() => <AuthorizationPage />} />
      )}
    </BrowserRouter>
  );
}

export default App;

// Test_ultra_task / T54321oikb
