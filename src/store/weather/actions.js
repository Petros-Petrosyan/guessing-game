import { getTemperature } from "services/http/weather";
import { checkTemperatures } from "utils";
import {
  ADD_WEATHER_START,
  ADD_WEATHER_SUCCESS,
  ADD_WEATHER_FAIL,
} from "./actionTypes";

const addWeatherStart = () => {
  return {
    type: ADD_WEATHER_START,
  };
};

const addWeatherSuccess = (weather) => {
  return {
    type: ADD_WEATHER_SUCCESS,
    payload: { weather },
  };
};

const addWeatherFail = () => {
  return {
    type: ADD_WEATHER_FAIL,
  };
};

export const addWeather = ({ city, answer }) => {
  return (dispatch) => {
    dispatch(addWeatherStart());
    getTemperature(city)
      .then((realTemperature) => {
        dispatch(
          addWeatherSuccess({
            name: city,
            answer,
            realTemperature,
            isRight: checkTemperatures(realTemperature, answer),
          })
        );
      })
      .catch(() => {
        dispatch(addWeatherFail());
      });
  };
};
