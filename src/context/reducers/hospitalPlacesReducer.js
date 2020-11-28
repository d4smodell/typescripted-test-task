import { changeHospitalPlaces } from "../../api/api";
import { CHANGE_PLACES, SHOW_MESSAGE } from "../types";

const initialState = {
  alertMessage: "Количество коек успешно изменено",
};

export const hospitalPlacesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PLACES:
      return {
        ...state,
      };

    case SHOW_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};

const showMessage = (payload) => ({ type: SHOW_MESSAGE, alertMessage: payload});

const changePlaces = (departmentValues) => ({
  type: CHANGE_PLACES,
  departmentValues,
});

export const changeHospitalPlacesThunk = (
  department_id,
  count_female_busy,
  count_female_o2_busy,
  count_female_free,
  count_female_o2_free,
  count_male_busy,
  count_male_o2_busy,
  count_male_free,
  count_male_o2_free
) => async (dispatch) => {
  const response = await changeHospitalPlaces.changePlaces(
    department_id,
    count_female_busy,
    count_female_o2_busy,
    count_female_free,
    count_female_o2_free,
    count_male_busy,
    count_male_o2_busy,
    count_male_free,
    count_male_o2_free
  );
  dispatch(changePlaces(response));
  console.log(response.data);
  dispatch(showMessage(response.data))
};
