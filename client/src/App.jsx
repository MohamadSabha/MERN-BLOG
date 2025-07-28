import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Signin from "./pages/Signin";
import Signup from "./pages/signup";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Sign-in" element={<Signin />} />
        <Route path="/Sign-up" element={<Signup />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
