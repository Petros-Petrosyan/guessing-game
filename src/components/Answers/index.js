import { useSelector } from "react-redux";
import { weatherSelector } from "store/weather/selectors";
import Answer from "./Answer";

const classes = {
  root: "flex items-center justify-center gap-5",
};

const Answers = () => {
  const { weathers } = useSelector(weatherSelector);

  if (!weathers.length) {
    return (
      <div className="pt-10">
        <p>Please answer the question</p>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      {weathers.map((weather) => {
        return <Answer key={weather.name} weather={weather} />;
      })}
    </div>
  );
};

export default Answers;
