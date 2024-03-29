import React from "react";

const Overlay = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`Overlay ${isMenuOpen ? "show" : ""}`}
      onClick={() => {
        setIsMenuOpen(false);
      }}
    ></div>
  );
};

export default Overlay;
