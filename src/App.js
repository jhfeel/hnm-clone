import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PrivateRoute from "./routes/PrivateRoute";
import SideMenu from "./components/SideMenu";
import Overlay from "./components/Overlay";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuList = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "Sport",
    "Sale",
    "지속가능성",
  ];

  return (
    <div>
      <SideMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        menuList={menuList}
      />
      <Overlay isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <NavBar setIsMenuOpen={setIsMenuOpen} menuList={menuList} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
