import "./App.css";

// import { useHashLocation } from 'wouter/use-hash-location';
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import MyProjects from "./pages/MyProjects";
import MySolutionsPage from "./pages/MySolutionsPage";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import {NavBarProvider} from "./context/NavContext";

function App() {
  return (
    <NavBarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contactPage" element={<ContactPage />} />
          <Route path="/projectsPage" element={<MyProjects />} />
          <Route path="/SolutionsPage" element={<MySolutionsPage />} />
          <Route path="/aboutPage" element={<AboutPage />} />
          <Route path="/Shivraj_Resume.pdf" element={null} />
        </Routes>
      </Router>
    </NavBarProvider>
  );
}

export default App;
