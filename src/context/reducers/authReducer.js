import {
  CLEAR_USER_DATA,
  GET_ADDITIONAL_INFO,
  SET_USER_DATA,
} from "../types";
import { additionInfoAPI, authAPI } from "../../api/api";

const initialState = {
  username: null,
  password: null,
  info: null,
  isAuth: false,
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

const getAdditionalInfo = (payload) => ({
  type: GET_ADDITIONAL_INFO,
  info: payload,
});

export const getInfo = () => async (dispatch) => {
  const response = await additionInfoAPI.getAdditionInfo();
  dispatch(getAdditionalInfo(response));
};

export const logout = () => async (dispatch) => {
  localStorage.clear();
  dispatch(clearUserData());
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
  } catch (e) {
    if (e) {
      const err = JSON.parse(e)
      console.log(err)
    }
  }
};

// Test_ultra_task / T54321oikb
