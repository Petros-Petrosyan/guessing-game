import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getRandomCity } from "utils";
import { weatherSelector } from "store/weather/selectors";
import { GAME_STEPS } from "constants";
import Form from "components/Form";
import Error from "./Error";
import Result from "./Result";

const classes = {
  root: "p-6 min-h-[200px] min-w-[320px] flex items-center m-auto justify-center flex-col shadow rounded-xl border border-gray-300 w-max",
};

const Board = () => {
  const [isFinished, setIsFinished] = useState(false);
  const { weathers, error } = useSelector(weatherSelector);
  const city = getRandomCity(weathers);

  useEffect(() => {
    if (weathers.length === GAME_STEPS) {
      setIsFinished(true);
    }
  }, [weathers.length]);

  if (error) {
    return <Error />;
  }

  return (
    <section className={classes.root}>
      {isFinished ? (
        <Result />
      ) : (
        <Fragment>
          <p className="pb-4">{`What is the current temperature in ${city}?`}</p>
          <Form city={city} />
        </Fragment>
      )}
    </section>
  );
};

export default Board;
