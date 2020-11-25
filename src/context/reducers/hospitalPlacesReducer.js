import { changeHospitalPlaces } from "../../api/api";
import { CHANGE_PLACES } from "../types";

const initialState = {};

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

const changePlaces = (payload) => ({
  type: CHANGE_PLACES,
  payload  
});

export const changeHospitalPlacesThunk = (payload) => async (dispatch) => {
  const response = await changeHospitalPlaces.changePlaces(payload);
  dispatch(changePlaces(response))
  console.log(response)
};
