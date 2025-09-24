// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

import RoInstallation from "./pages/ROInstallation";
import WaterPurification from "./pages/WaterPurification";
import AnnualMaintenance from "./pages/AnnualMaintenance";
import FilterReplacement from "./pages/FilterReplacement";
import FreeWaterTesting from "./pages/FreeWaterTesting";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/ro-installation" element={<RoInstallation />} />
            <Route path="/water-purification" element={<WaterPurification />} />
            <Route path="/annual-maintenance" element={<AnnualMaintenance />} />
            <Route path="/filter-replacement" element={<FilterReplacement />} />
            <Route path="/free-water-testing" element={<FreeWaterTesting />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}