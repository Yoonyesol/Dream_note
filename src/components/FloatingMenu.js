import { useState } from "react";

import "./FloatingMenu.css";
import { useNavigate } from "react-router-dom";

const FloatingMenu = () => {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const navigate = useNavigate();

  const shownSubMenuHandler = () => {
    setOpenSubMenu((prev) => !prev);
  };

  return (
    <div className="floating-menu">
      <div className="sub-menu">
        {openSubMenu && (
          <ul className="options">
            <li>
              <button className="sub-btn" onClick={() => navigate("/auth")}>
                로그인
              </button>
            </li>
            <li>
              <button className="sub-btn">서브메뉴</button>
            </li>
          </ul>
        )}
      </div>
      <button className="menu-btn" onClick={shownSubMenuHandler}>
        메뉴
      </button>
    </div>
  );
};

export default FloatingMenu;
