import { useSelector } from "react-redux";
import { weatherSelector } from "store/weather/selectors";
import { hasWon } from "utils/index";

const Result = () => {
  const { weathers } = useSelector(weatherSelector);

  return (
    <p>
      {hasWon(weathers)
        ? "Congratulations you are the champion!"
        : "You didn't win this time. Keep playing!"}
    </p>
  );
};

export default Result;
