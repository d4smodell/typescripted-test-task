import React from "react";
import { PatientDischarge } from "./PatientDischarge";
import { PlacesCount } from "./PlacesCount";
import { ReplacePatients } from "./ReplacePatients";
import { InfoModal } from "./InfoModal";

export const ModalButtons = (props) => {
  return (
    <div className={"patients_container"}>
      <div className={"patients_actions"}>
        <PlacesCount title={"Изменить число мест"} />
        <ReplacePatients title={"Перевести пациентов"} />
        <PatientDischarge title={"Выписать пациентов"} />
        <InfoModal title={`Места в других отделениях`} />
      </div>
    </div>
  );
};
