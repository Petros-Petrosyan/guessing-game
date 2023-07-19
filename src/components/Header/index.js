const classes = {
  root: "p-6 text-center",
  title: "text-xl text-green-700",
};

const Header = () => {
  return (
    <section className={classes.root}>
      <h2 className={classes.title}>Guessing Game</h2>
    </section>
  );
};

export default Header;
