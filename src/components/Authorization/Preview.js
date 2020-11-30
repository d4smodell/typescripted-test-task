import React from "react";
import emblem from "../Images/emblem_tyumen.png";
import logo from "../Images/itslogo.png";
import './AuthForm.css'

export const Preview = (props) => {
  return (
    <>
      <div className={"Preview"}>
        <div>
          <img src={emblem} alt="" />
        </div>
        <div>
          <h1>Информационная система “Коечный фонд - бронирование”</h1>
          <p>Департамент информатизации Тюменской области</p>
        </div>
      </div>
      <div style={{ padding: "500px 0 0 " }}>
        <p style={{ color: "#858080", fontSize: "18px" }}>Разработчик</p>
        <img src={logo} alt="" />
      </div>
    </>
  );
};
