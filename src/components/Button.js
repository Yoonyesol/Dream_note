import "./Button.css";

const Button = ({ type, text, onClick }) => {
  return (
    <button className={`Button ${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
