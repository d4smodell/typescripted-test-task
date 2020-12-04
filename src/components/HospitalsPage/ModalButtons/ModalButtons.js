import React from "react";
import { PatientDischarge } from "./PatientDischarge/PatientDischarge";
import { PlacesCount } from "./PlacesCount/PlacesCount";
import { ReplacePatients } from "./ReplacePatients/ReplacePatients";
import { InfoModal } from "./InfoModal/InfoModal";

export const ModalButtons = (props) => {
  return (
    <div className={"patients_container"}>
      <div style={{flexWrap: 'wrap'}} className={"patients_actions"}>
        <PlacesCount title={"Изменить число мест"} />
        <ReplacePatients title={"Перевести пациентов"} />
        <PatientDischarge title={"Выписать пациентов"} />
        <InfoModal title={`Места в других отделениях`} />
      </div>
    </div>
  );
};
