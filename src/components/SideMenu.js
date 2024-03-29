import React from "react";

const SideMenu = ({ isMenuOpen, setIsMenuOpen, menuList }) => {
  return (
    <div className={`SideMenu ${isMenuOpen ? "open" : ""}`}>
      <div className="menu-close-btn-box">
        <div
          className="menu-close-btn clickable"
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          X
        </div>
      </div>
      {menuList.map((item) => {
        return <div className="side-menu-item clickable">{item}</div>;
      })}
    </div>
  );
};

export default SideMenu;
