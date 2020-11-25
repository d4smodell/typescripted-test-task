import React from 'react'
import { useSelector } from 'react-redux';
import '../Content.css'

export const PlacesInfo = () => {
  const placesCount = useSelector(state => state.departments.department)
  const free = placesCount?.data?.count_female_free +
  placesCount?.data?.count_female_o2_free + 
  placesCount?.data?.count_male_free +
  placesCount?.data?.count_male_o2_free

  const busy = placesCount?.data?.count_female_busy +
  placesCount?.data?.count_female_o2_busy + 
  placesCount?.data?.count_male_busy +
  placesCount?.data?.count_male_o2_busy

  const total = busy + free

  return (
    <div>
      <h1>Места в стационаре</h1>
      <div className={"hospital_places"}>
        <p>
          Свободно <span>{free || 0}</span> Занято <span>{busy || 0}</span> Всего <span>{total || 0}</span>
        </p>
      </div>
    </div>
  );
};
