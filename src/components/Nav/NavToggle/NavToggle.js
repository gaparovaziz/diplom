import classes from "./NavToggle.module.css";

function NavToggle({ callback }) {
  return (
    <button onClick={callback} className={classes.NavToggle}>hola
    </button>
  );
}

export default NavToggle;