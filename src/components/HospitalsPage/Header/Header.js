import React from "react";
import { LogoutButton } from "./LogoutButton";
import '../Header/Hospitals.css'
import emblem from "../../Images/emblem_tyumen.png";

export const Header = (props) => {
  return (
    <div className={"hospitals__header"}>
      <div className={"hospitals__container"}>
        <div className={"Preview"}>
          <div className={"logo"}>
            <img src={emblem} alt="" />
          </div>
          <div className={"Info"}>
            <h1>Информационная система “Коечный фонд - бронирование”</h1>
            <p>Департамент информатизации Тюменской области</p>
          </div>
        </div>
        <LogoutButton logout={props.logout} />
      </div>
    </div>
  );
};
