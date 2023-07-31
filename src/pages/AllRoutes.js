import { Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Properties from "./Properties"
import Interior from "./Interior"
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"

function AllRoutes() {
  return (
    <div className="allRoutes">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  )
}

export default AllRoutes;