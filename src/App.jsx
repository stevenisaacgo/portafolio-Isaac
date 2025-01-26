import "tailwind.css";
import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "components/organisms/Navbar";
import About from "pages/About";
import ComponentsPage from "pages/ComponentsPage";
import Contact from "pages/Contact";
import Footer from "components/organisms/Footer";
import Home from "pages/Home";
import NotFound from "pages/404";
import ExperiencePage from "./pages/ExperiencePage";
import PrivacyRequestPage from "./pages/PrivacyRequestPage";

const TypeformEmbed = lazy(() =>
  import("components/organisms/TypeformEmbed.jsx")
);

const sections = [
  {
    title: "About Me",
    content: ["Achievements", "Programming Knowledge", "Contact"],
    links: ["notfound", "home", "Contact"],
  },
  {
    title: "Skills",
    content: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "C#",
      "Tailwind CSS",
      "SQL",
    ],
    links: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
  {
    title: "Components",
    content: ["Navbar Button", "Colourful Button", `Footer`],
    links: [
      "components",
      "components",
      "components",
    ],
  },
  {
    title: "Certificates",
    content: ["Certificate FrontEnd", "Certificate DAM", "Certificate C1"],
    links: ["privacy", "privacy", "privacy"],
  },
  {
    title: "Social",
    content: ["LinkedIn", "Github"],
    links: [
      "https://www.linkedin.com/in/isaac-godoy-ortega/",
      "https://github.com/stevenisaacgo",
    ],
  },
];

const btnInfo = [
  { to: "/projects", text: "Projects", title: "My Projects" },
  { to: "/components", text: "Components", title: "My Components" },
  { to: "/experience", text: "Experience", title: "Experience" },
  { to: "/about", text: "About", title: "About Us" },
  { to: "/contact", text: "Contact", title: "Contact Us" },
];

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-svh bg-slate-900 justify-between">
          <Navbar btnInfo={btnInfo} />
          <TypeformEmbed />
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<ExperiencePage/>}/>
            <Route path="/privacy" element={<PrivacyRequestPage />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </div>
        <div className="w-full">
        <Footer
          sections={sections}
          textTitle="Isaac Godoy Ortega"
          textSubtitle="&copy; 2023 My Personal Website. All rights reserved."
        />
        </div>
      </div>
    </Router>
  );
}

export default App;
