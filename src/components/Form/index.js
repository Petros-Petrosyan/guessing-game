import { memo } from "react";
import { useDispatch } from "react-redux";
import { addWeather } from "store/weather/actions";
import SubmitButton from "./SubmitButton";

const classes = {
  input: "w-full outline-none px-4 py-3 border border-gray-500 mb-2 rounded",
};

const Form = ({ city }) => {
  const dispatch = useDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    const {
      target: {
        temperature: { value },
      },
    } = event;

    value && dispatch(addWeather({ city, answer: Number(value) }));
    event.target.temperature.value = "";
  };

  return (
    <form onSubmit={onSubmit} className="text-center">
      <input
        className={classes.input}
        type="number"
        name="temperature"
        placeholder="Celsius"
      />
      <SubmitButton />
    </form>
  );
};

export default memo(Form);
