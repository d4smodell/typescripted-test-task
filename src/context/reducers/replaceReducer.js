import { replaceAPI } from "../../api/api";
import { REPLACE_PATIENTS } from "../types";
import { message } from 'antd';

export const replaceReducer = (state, action) => {
  switch (action.type) {
    case REPLACE_PATIENTS:
      return {
        ...state,
      };

    default:
      return state;
  }
};

const replacePatients = (payload) => ({ type: REPLACE_PATIENTS, payload });

export const replace = payload => async (dispatch) => {
  const response = await replaceAPI.replacePatients(payload);
  dispatch(replacePatients(response));
  message.info(response?.data || response?.detail || "Произошла ошибка, попробуйте ещё раз!!")
};
