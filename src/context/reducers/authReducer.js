import {
  CLEAR_USER_DATA,
  ERROR_CATCHER,
  GET_ADDITIONAL_INFO,
  SET_USER_DATA,
} from "../types";
import { additionInfoAPI, authAPI } from "../../api/api";

const initialState = {
  username: null,
  password: null,
  info: null,
  isAuth: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case GET_ADDITIONAL_INFO:
      return {
        ...state,
        info: action.info,
      };

    case ERROR_CATCHER:
      return {
        ...state,
        error: action.error,
      };

    case CLEAR_USER_DATA:
      return {
        ...state,
        isAuth: false,
      };

    default:
      return state;
  }
};

const setAuth = (username, password, isAuth) => ({
  type: SET_USER_DATA,
  payload: { username, password, isAuth },
});

const clearUserData = () => ({
  type: CLEAR_USER_DATA,
  isAuth: false,
});

export const errorCatcher = (error) => ({ type: ERROR_CATCHER, error });
const getAdditionalInfo = (payload) => ({
  type: GET_ADDITIONAL_INFO,
  info: payload,
});

export const getInfo = () => async (dispatch) => {
  const response = await additionInfoAPI.getAdditionInfo();
  console.log(response.data.departments);
  dispatch(getAdditionalInfo(response));
};

export const logout = () => async (dispatch) => {
  localStorage.clear();
  dispatch(clearUserData());
  console.log(initialState.isAuth);
};

export const login = (username, password, isAuth) => async (dispatch) => {
  try {
    let response = await authAPI.login(username, password, isAuth);
    dispatch(setAuth(username, password, true));
    if (response?.data?.username) {
      return isAuth === true;
    } else if (!response?.data?.access) {
      await authAPI.refreshToken();
    } else logout();

    console.log(isAuth);
  } catch (e) {
    console.log("ERROR: !!!", e);
    if (e?.status === 401) throw console.log("ERROR: !!!", e.status);
  }
};

// Test_ultra_task / T54321oikb
