import { changeHospitalPlaces } from "../../api/api";
import { CHANGE_PLACES } from "../types";
import { message } from 'antd';

const initialState = {
  alertMessage: "Количество коек успешно изменено",
};

export const hospitalPlacesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PLACES:
      return {
        ...state,
      };

      default:
      return state;
  }
};

const changePlaces = (departmentValues) => ({
  type: CHANGE_PLACES,
  departmentValues,
});

export const changeHospitalPlacesThunk = (payload) => async (dispatch) => {
  try {
    const response = await changeHospitalPlaces.changePlaces(payload);
    dispatch(changePlaces(response));
    message.info(response?.data);
    console.log(response)
  } catch(e) {
    if(e) {
      const err = JSON.stringify(e)
      message.error(err)
    }
  }
};
