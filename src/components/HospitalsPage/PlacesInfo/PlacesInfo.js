import React from 'react'
import '../Content.css'

export const PlacesInfo = () => {
  return (
    <div>
      <h1>Места в стационаре</h1>
      <div className={"hospital_places"}>
        <p>
          Свободно <span>60</span> Занято <span>60</span> Всего <span>60</span>
        </p>
      </div>
    </div>
  );
};
