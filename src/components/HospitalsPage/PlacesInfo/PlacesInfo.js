import React from 'react'
import { useSelector } from 'react-redux';
import '../Content.css'

export const PlacesInfo = () => {
  const placesCount = useSelector(state => state.departments.department)
  const free = placesCount?.data?.count_female_free +
  placesCount?.data?.count_female_o2_free + 
  placesCount?.data?.count_male_free +
  placesCount?.data?.count_male_o2_free
  return (
    <div>
      <h1>Места в стационаре</h1>
      <div className={"hospital_places"}>
        <p>
          Свободно <span>{free || 0}</span> Занято <span>60</span> Всего <span>60</span>
        </p>
      </div>
    </div>
  );
};
