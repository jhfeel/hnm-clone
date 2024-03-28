import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticated={setAuthenticated} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticated={authenticated} />}
        />
      </Routes>
    </div>
  );
}

export default App;
