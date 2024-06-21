import "tailwind.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "components/organisms/Navbar";
import About from "pages/About";
import Projects from "pages/Projects";
import Contact from "pages/Contact";
import Footer from "components/organisms/Footer";
import Home from "pages/Home";
import NotFound from "./pages/404";

const sections = [
  {
    title: 'About Me',
    content: ['Achivements', 'Programming Knowledge', 'Contact'],
    links: ['notfound', 'notfound', 'Contact'],
  },
  {
    title: 'Skills',
    content: ['HTML', 'CSS', 'JavaScript', 'React','C#', 'Tailwind CSS', 'SQL'],
    links: ['notfound', 'notfound', 'notfound', 'notfound','notfound', 'notfound', 'notfound'],
  },
  {
    title: 'Projects',
    content: ['Navbar Button','Colourfull Button', `Footer`],
    links: ['projects/#NavbarButton','projects/#ColourfullButton', 'projects/#Footer'],
  },
  {
    title: 'Certificates',
    content: ['Certificate FrontEnd', 'Certificate DAM'],
    links: ['notfound', 'notfound'],
  },
  {
    title: 'Social',
    content: ['LinkedIn', 'Github'],
    links: ['https://www.linkedin.com/in/isaac-godoy-ortega-dam/', 'https://github.com/stevenisaacgo'],
  },
];
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow bg-slate-900">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </div>
        <Footer sections={sections} textTitle = "Isaac Godoy Ortega" textSubtitle="&copy; 2023 My Personal Website. All rights reserved."/>
      </div>
    </Router>
  );
}

export default App;
