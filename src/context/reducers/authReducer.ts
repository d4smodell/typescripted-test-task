import {
  CLEAR_USER_DATA,
  GET_ADDITIONAL_INFO,
  SET_USER_DATA,
} from "../types";
import { additionInfoAPI, authAPI } from "../../api/api";
import { Dispatch } from "react";

type ActionTypes = SetAuthType | GetAdditionalInfoType | ClearUserDataType

type InitialState = {
  username: string | null,
  password: string | null,
  info: string | null
}

const initialState: InitialState = {
  username: null,
  password: null,
  info: null,
};

export const authReducer = (state = initialState, action: ActionTypes): InitialState => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case GET_ADDITIONAL_INFO:
      return {
        ...state,
        info: action.payload,
      };

    case CLEAR_USER_DATA:
      return {
        ...state,
      };

    default:
      return state;
  }
};

type SetAuthType = {
  type: typeof SET_USER_DATA,
  payload: { username: string, password: string }
}

const setAuth = (username: string, password: string): SetAuthType => ({
  type: SET_USER_DATA,
  payload: { username, password },
});

type ClearUserDataType = {
  type: typeof CLEAR_USER_DATA
}

const clearUserData = (): ClearUserDataType => ({
  type: CLEAR_USER_DATA,
});

type GetAdditionalInfoType = {
  type: typeof GET_ADDITIONAL_INFO,
  payload: string
} 

const getAdditionalInfo = (payload: string): GetAdditionalInfoType => ({
  type: GET_ADDITIONAL_INFO,
  payload,
});

export const getInfo = () => async (dispatch: Dispatch<GetAdditionalInfoType>) => {
  const response = await additionInfoAPI.getAdditionInfo();
  dispatch(getAdditionalInfo(response));
};

export const logout = () => async (dispatch: Dispatch<any>) => {
  localStorage.clear();
  dispatch(clearUserData());
};

export const login = (username: string, password: string) => async (dispatch: Dispatch<SetAuthType>) => {
  try {
    let response = await authAPI.login(username, password);
    dispatch(setAuth(username, password));
    if (response?.data?.username) {
      return '';
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
