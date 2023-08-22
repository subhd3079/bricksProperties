import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Properties from "./Properties";
import Interior from "./Interior";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import TermsConditions from "./TermsConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import Faqs from "./Faqs";
import Project from "../components/Project";

function AllRoutes() {
  return (
    <div className="allRoutes">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/termsConditions" element={<TermsConditions />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/properties/:id" element={<Project />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
