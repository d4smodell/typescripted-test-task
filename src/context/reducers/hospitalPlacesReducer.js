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
  const response = await changeHospitalPlaces.changePlaces(payload);
  dispatch(changePlaces(response));
  message.info(response?.data || "Произошла ошибка, попробуйте ещё раз!");
  console.log(response)
};
