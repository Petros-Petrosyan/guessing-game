import Answers from "components/Answers";

const classes = {
  footer:
    "absolute h-[180px] bg-white bottom-0 border-t border-t-gray-500 w-full p-10 text-center",
};

const Footer = () => (
  <footer className={classes.footer}>
    <Answers />
  </footer>
);

export default Footer;
