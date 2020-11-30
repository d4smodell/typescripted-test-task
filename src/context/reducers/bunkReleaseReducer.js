import { message } from "antd";
import { bunkReleaseAPI } from "../../api/api";
import { BUNK_RELEASE } from "../types";

const initialState = {};

export const bunkReleaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUNK_RELEASE:
      return {
        ...state,
        currentPatient: action.currentPatient,
      };
    default:
      return state;
  }
};

const dischargePatient = (payload) => ({ type: BUNK_RELEASE, payload });

export const discharge = (sex, has_oxygen, department_id) => async (
  dispatch
) => {
  try {
    const response = await bunkReleaseAPI.releaseBunk(
      sex,
      has_oxygen,
      department_id
    );
    dispatch(dischargePatient(response));
    console.log(response);
    message.info(response?.data || "Произошла ошибка, попробуйте ещё раз!!");
  } catch (e) {
    if (e) {
      const err = JSON.stringify(e);
      message.error(err);
    }
  }
};
