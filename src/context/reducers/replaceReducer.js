import { replaceAPI } from "../../api/api";
import { REPLACE_PATIENTS } from "../types";

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

export const replace = (
  from_sex,
  from_has_oxygen,
  from_department_id,
  to_sex,
  to_has_oxygen,
  to_department_id,
  count,
) => async (dispatch) => {
  const response = await replaceAPI.replacePatients(
    from_sex,
    from_has_oxygen,
    from_department_id,
    to_sex,
    to_has_oxygen,
    to_department_id,
    count,
  );
  dispatch(replacePatients(response));
};
