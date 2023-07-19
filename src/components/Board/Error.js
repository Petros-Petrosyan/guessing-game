const classes = {
  root: "flex items-center justify-center flex-col gap-4",
};

const Error = () => {
  return (
    <section className={classes.root}>
      <h2 className="text-2xl">Opps...</h2>
      <p>Something want wrong</p>
    </section>
  );
};

export default Error;
