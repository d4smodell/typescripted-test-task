import React from "react";
import emblem from "../Images/emblem_tyumen.png"

export const Preview = (props) => {
  return (
    <div className={"Preview"}>
      <div>
        <img src={emblem} alt="" />
      </div>
      <div>
        <h1>Информационная система “Коечный фонд - бронирование”</h1>
        <p>Департамент информатизации Тюменской области</p>
      </div>
    </div>
  );
};
