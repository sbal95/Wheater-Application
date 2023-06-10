import * as actionTypes from "./ActionTypes";

export const setCity = (city) => {
  return { type: actionTypes.SET_CITY, payload: city };
};

export const changeHourData = (hourdata) => {
  return { type: actionTypes.SET_HOUR_DATA, payload: hourdata };
};


export const fetchDataRequest = () => {
  return {
    type: actionTypes.FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: actionTypes.FETCH_DATA_FAILURE,
    payload: error,
  };
};
