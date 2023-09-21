import "./Button.css";

const Button = ({ type, text, onClick }) => {
  //버튼 종류 3가지(취소:negative, 완료:positive, 추가:plus)
  return (
    <button className={`Button ${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
