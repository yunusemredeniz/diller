import logo from "./logo.svg";
import sass from "./App.scss";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Views/Layout";
import Home from "./Views/Home";
import ReactIcons from "./Views/ReactIcons";
import ReactSlick from "./Views/ReactSlick";
import Toastify from "./Views/Toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/react-icons" element={<ReactIcons />} />
          <Route path="/react-slick" element={<ReactSlick />} />
          <Route path="/toastify" element={<Toastify />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
