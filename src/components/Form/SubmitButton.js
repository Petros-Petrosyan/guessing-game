import { useSelector } from "react-redux";
import { weatherSelector } from "store/weather/selectors";

const classes = {
  button:
    "px-4 py-2 min-w-[105px] bg-green-700 rounded m-auto text-white disabled:bg-gray-500",
};

const SubmitButton = () => {
  const { loading } = useSelector(weatherSelector);

  return (
    <button disabled={loading} className={classes.button} type="submit">
      {loading ? "Loading ..." : "Check"}
    </button>
  );
};

export default SubmitButton;
