import { NavLink } from "react-router-dom";

import "../css/common.css";
import "../css/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div>
          <div>
            <NavLink to="/" className="footerLogo">
              <img src="../images/onlyLogo.png" />
            </NavLink>
            <div className="contactDetails">
              <img src="https://i.ibb.co/QDZ7YPN/callBlue.png" />
              <p>+917699991135</p>
            </div>
            <div className="contactDetails">
              <img src="https://i.ibb.co/dmkLGTT/mailBlue.png" />
              <p>helpdeskbproperties@gmail.com</p>
            </div>
            <div className="contactDetails">
              <img src="https://i.ibb.co/qFT8W88/location-Blue.png" />
              <p>
                A-64, S.S.B Sarani, Sector 2(C), Bank Colony More, Bidhanngar,
                Durgapur, Paschim Bardhaman, West Bengal, 713312
              </p>
            </div>
          </div>
          <div>
            <p className="footerHeading">Quick Links</p>
            <a href="#" className="footerLink">
              Privacy Policy
            </a>
            <a href="#" className="footerLink">
              Terms & Conditions
            </a>
            <a href="#" className="footerLink">
              FAQs
            </a>
          </div>
          <div>
            <p className="footerHeading">Follow Us</p>
            <div className="socialLinksDiv">
              <img src="https://i.ibb.co/PmB1mq5/facebook.png" />
              <img src="https://i.ibb.co/HDrYCTw/instagram.png" />
              <img src="https://i.ibb.co/Y0zmV1r/linkedin.png" />
              <img src="https://i.ibb.co/GVHCfqc/twitter.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
