import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/common.css";
import "../css/termsConditions.css";

function TermsConditions() {
  return (
    <div className="termsConditions">
      <div className="navbarColorSection">
        <Navbar />
      </div>

      <Footer />
    </div>
  );
}

export default TermsConditions;
