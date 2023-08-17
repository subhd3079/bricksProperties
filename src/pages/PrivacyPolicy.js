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

      <div className="textSection">
        <div className="container">
          <h2>Privacy Policy</h2>
          <h4>
            We, Bricks Properties are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and protect the
            personal information you provide to us in connection with our real
            estate services. By accessing our website, using our services, or
            providing us with your personal information, you consent to the
            practices described in this policy.
          </h4>

          <h3>We may collect the following types of personal information:</h3>
          <p>
            1. Contact Information: This may include your name, document, email
            address, phone number, and mailing address.
          </p>
          <p>
            2. Property Preferences: Information related to your preferences for
            the type of flat you are interested in, such as location, size,
            amenities, and budget.
          </p>
          <p>
            3. Financial Information: Information related to your financial
            capabilities, such as income range and mortgage pre-approval status.
          </p>
          <p>
            4. Communication History: Records of our interactions with you,
            including emails, chat conversations, and phone calls.
          </p>
          <p>
            5. Website Usage Data: Information collected through cookies and
            similar technologies, such as your IP address, browser type, device
            information, and pages visited on our website.
          </p>

          <h3>
            We may use your personal information for the following purposes:
          </h3>
          <p>
            1. Providing Services: To facilitate the sale of flats, including
            connecting you with potential properties, arranging property
            viewings, and assisting with negotiations.
          </p>
          <p>
            2. Communication: To contact you regarding property updates, offers,
            newsletters, and other relevant information.
          </p>
          <p>
            3. Marketing: To provide you with information about our services,
            promotions, and upcoming properties that may interest you.
          </p>
          <p>
            4. Improvement: To analyze and improve our website, services, and
            customer experience.
          </p>
          <p>
            5. Legal Obligations: To comply with legal requirements, respond to
            lawful requests, and protect our rights and interests.
          </p>

          <h3>You have the right to:</h3>
          <p>
            1. Access, correct, or update your personal information by
            contacting us.
          </p>
          <p>2. Opt out of receiving marketing communications from us.</p>
          <p>
            3. Request the deletion of your personal information, subject to
            legal requirements.
          </p>

          <h3>Security Measures</h3>
          <p>
            We employ industry-standard security measures to protect your
            personal information from unauthorized access, disclosure,
            alteration, or destruction.
          </p>

          <h3>Changes to this Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. The updated
            version will be posted on our website.
          </p>

          <h3>Contact Us</h3>
          <p>
            If you have any questions, concerns, or requests related to your
            personal information or this Privacy Policy, please contact us at
            helpdeskbproperties@gmail.com
          </p>

          <h5 style={{ marginTop: "40px" }}>
            By using our services, you acknowledge that you have read and
            understood this Privacy Policy and agree to its terms and
            conditions.
          </h5>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
