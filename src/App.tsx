import LandingPage from "./screens/LandingPage";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
