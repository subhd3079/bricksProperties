import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/common.css";
import "../css/privacyPolicy.css";

function PrivacyPolicy() {
  return (
    <div className="privacyPolicy">
      <div className="navbarColorSection">
        <Navbar />
      </div>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
