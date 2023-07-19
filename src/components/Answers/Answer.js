import classNames from "classnames";

const classes = {
  root: "border rounded-lg p-3",
  right: "text-green-500 border-gray-500",
  wrong: "text-red-500 border border-red-500",
};

const Answer = ({ weather }) => {
  const { realTemperature, answer, isRight, name } = weather;

  return (
    <div
      className={classNames(
        classes.root,
        isRight ? classes.right : classes.wrong
      )}
    >
      <p>{name}</p>
      <p>Answer: {answer}</p>
      <p>Temperature: {realTemperature}</p>
    </div>
  );
};

export default Answer;
