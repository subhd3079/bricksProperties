import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopButton from "../components/TopButton";

import "../css/common.css";
import "../css/termsConditions.css";

function TermsConditions() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="termsConditions">
      {/* top button */}
      <TopButton />

      <div className="navbarColorSection">
        <Navbar />
      </div>

      <div className="textSection">
        <div className="container">
          <h2>Terms and Conditions</h2>
          <h4>
            Welcome to Bricks Properties. By accessing our website, using our
            services, or purchasing flats from us, you agree to the following
            terms and conditions. Please read this document carefully before
            proceeding.
          </h4>

          <h3>1. Property Information</h3>
          <p>
            1.1 The information provided on our website, brochures, and
            marketing materials about the flats, including prices, sizes,
            layouts, amenities, and availability, is subject to change without
            notice.
          </p>
          <p>
            1.2 We make reasonable efforts to ensure the accuracy of the
            information provided, but we do not warrant its completeness or
            reliability. It is recommended that you independently verify any
            information before making a purchasing decision.
          </p>

          <h3>2. Flat Purchase</h3>
          <p>
            2.1 All flat sales are subject to availability and approval by
            Bricks Properties.
          </p>
          <p>
            2.2 To reserve a flat, a reservation deposit may be required. This
            deposit is non-refundable unless the reservation is declined by
            Bricks Properties.
          </p>
          <p>
            2.3 Upon acceptance of your reservation, a legally binding agreement
            will be entered into, outlining the terms of the purchase.
          </p>

          <h3>3. Pricing and Payment</h3>
          <p>
            3.1 The prices of flats are subject to change without notice. The
            price agreed upon during the reservation will be honored for a
            specified period, as outlined in the agreement.
          </p>
          <p>
            3.2 Payment terms, including down payments, installments, and final
            payment, will be detailed in the purchase agreement.
          </p>
          <p>
            3.3 Any applicable taxes, fees, or charges related to the purchase
            of the flat are the responsibility of the buyer.
          </p>

          <h3>4. Cancellation and Refunds</h3>
          <p>
            4.1 If you decide to cancel your purchase after the reservation
            period, the terms and conditions regarding cancellation and
            potential refunds will be outlined in the purchase agreement.
          </p>

          <h3>5. Delivery and Handover</h3>
          <p>
            5.1 The estimated completion date for the flat will be provided in
            the purchase agreement.
          </p>
          <p>
            5.2 We will aim to deliver the flat on or before the estimated
            completion date. However, delays due to unforeseen circumstances may
            occur, and we will not be held liable for such delays.
          </p>

          <h3>6. Warranty and Defects</h3>
          <p>
            6.1 Flats are sold with the warranty as provided by law. Any defects
            or issues that arise within the warranty period will be addressed in
            accordance with the terms outlined in the purchase agreement.
          </p>

          <h3>7. Intellectual Property</h3>
          <p>
            7.1 All intellectual property rights, including copyrights and
            trademarks, associated with our branding, marketing materials, and
            website content are owned by Bricks Properties and protected by
            applicable laws.
          </p>

          <h3>8. Privacy</h3>
          <p>
            8.1 The collection and use of personal information are governed by
            our Privacy Policy, which can be found on our website.
          </p>

          <h3>9. Limitation of Liability</h3>
          <p>
            9.1 To the fullest extent permitted by law, Bricks Properties will
            not be liable for any direct, indirect, incidental, consequential,
            or special damages arising from the use of our services or the
            purchase of flats.
          </p>

          <h5 style={{ marginTop: "40px" }}>
            By accessing our website, using our services, or purchasing flats
            from us, you acknowledge that you have read, understood, and agreed
            to these terms and conditions.
          </h5>
          <h5>
            For any inquiries or clarifications, please contact us at
            +917699991135 / helpdeskbproperties@gmail.com.
          </h5>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default TermsConditions;
