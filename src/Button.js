import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Button;
