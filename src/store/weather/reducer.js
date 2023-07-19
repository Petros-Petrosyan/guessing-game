import {
  ADD_WEATHER_START,
  ADD_WEATHER_SUCCESS,
  ADD_WEATHER_FAIL,
} from "./actionTypes";

const initialState = {
  loading: false,
  error: false,
  weathers: [],
};

const addWeatherStart = (state) => {
  return {
    ...state,
    loading: true,
    error: false,
  };
};

const addWeatherSuccess = (state, payload) => {
  const { weather } = payload;
  return {
    ...state,
    weathers: [...state.weathers, weather],
    loading: false,
    error: false,
  };
};

const addWeatherFail = (state) => {
  return {
    ...state,
    loading: false,
    error: true,
  };
};

export const weatherReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_WEATHER_START:
      return addWeatherStart(state);
    case ADD_WEATHER_SUCCESS:
      return addWeatherSuccess(state, payload);
    case ADD_WEATHER_FAIL:
      return addWeatherFail(state);
    default:
      return state;
  }
};
