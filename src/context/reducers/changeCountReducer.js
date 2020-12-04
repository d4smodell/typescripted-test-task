import { message } from "antd";
import { changeCountAPI } from "../../api/api";

const ADD_PATIENT = "ADD_PATIENT";
const REMOVE_PATIENT = "REMOVE_PATIENT";

export const changeCountReducer = (state, action) => {
  switch (action.type) {
    case ADD_PATIENT:
      return {
        ...state,
      };

    case REMOVE_PATIENT:
      return {
        ...state,
      };

    default:
      return state;
  }
};

const addPatient = (payload) => ({ type: ADD_PATIENT, payload });
const removePatient = (payload) => ({ type: REMOVE_PATIENT, payload });

export const add = (
  department_id,
  busy_count,
  free_count,
  sex,
  has_oxygen
) => async (dispatch) => {
  try {
    const response = await changeCountAPI.add(
      department_id,
      busy_count,
      free_count,
      sex,
      has_oxygen
    );
    dispatch(addPatient(response));
  } catch (e) {
    if (e) {
      const err = JSON.parse(e);
      message.error(err);
    }
  }
};

export const remove = (
  department_id,
  busy_count,
  free_count,
  sex,
  has_oxygen
) => async (dispatch) => {
  try {
    const response = await changeCountAPI.remove(
      department_id,
      busy_count,
      free_count,
      sex,
      has_oxygen
    );
    dispatch(removePatient(response));
  } catch (e) {
    if (e) {
      const err = JSON.stringify(e);
      message.error(err);
    }
  }
};
