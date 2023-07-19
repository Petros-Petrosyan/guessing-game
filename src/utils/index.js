import { CITIES } from "../constants";

export const getRandomCity = (existingValues) => {
  let randomCity = null;

  while (!randomCity) {
    const randomIndex = Math.floor(Math.random() * CITIES.length);
    const name = CITIES[randomIndex];
    const hasValueInExistingList = existingValues.find(
      (el) => el.name === name
    );
    if (!hasValueInExistingList) {
      randomCity = name;
    }
  }

  return randomCity;
};

export const checkTemperatures = (realTemperature, answer) => {
  if (answer === realTemperature) {
    return true;
  }

  const upperLimit = realTemperature + 5;
  const lowerLimit = realTemperature - 5;

  if (answer >= lowerLimit && answer <= upperLimit) {
    return true;
  }

  return false;
};

export const hasWon = (weathers) => {
  let rightAnswersCount = 0;

  weathers.forEach((el) => {
    if (el.isRight) {
      rightAnswersCount += 1;
    }
  });

  if (rightAnswersCount >= 3) {
    return true;
  }

  return false;
};
