import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./page/home.jsx";
import Footer from "./components/Footer.jsx";
import Modal from "./components/Modal.jsx";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project/:projectId" exact element={<Modal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
