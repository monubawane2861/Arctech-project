import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommunityInitiativesPage from "./components/pages/community/Communityfirst";
import Careers from "./components/pages/careers/Careers";
import Home from "./components/pages/homee/Home";
import Resource from "./components/pages/resource/Resource";
import About from "./components/pages/about/Home";
import Contact from "./components/pages/contact/Contact";
import OurSolution from "./components/pages/oursolution/OurSolution";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/community"
            element={<CommunityInitiativesPage />}
          ></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/resource" element={<Resource />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/solutions" element={<OurSolution />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
