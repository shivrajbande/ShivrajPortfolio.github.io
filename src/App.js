import "./App.css";

// import { useHashLocation } from 'wouter/use-hash-location';
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import MyProjects from "./pages/MyProjects";
import MySolutionsPage from "./pages/MySolutionsPage";

import { Router, Route, Routes } from "react-router-dom";
import { NavBarProvider } from "./context/NavContext";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <NavBarProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Projects" element={<MyProjects />} />
        <Route path="/Solutions" element={<MySolutionsPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Blogs" element={<BlogPage />} />
      </Routes>
    </NavBarProvider>
  );
}

export default App;
