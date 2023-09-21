import "./Header.css";

const Header = ({ leftBtn, headText, rightBtn }) => {
  return (
    <header>
      <div className="header-left-btn">{leftBtn}</div>
      <div className="header-text">{headText}</div>
      <div className="header-right-btn">{rightBtn}</div>
    </header>
  );
};
export default Header;
