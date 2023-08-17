import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/common.css";
import "../css/faqs.css";

function Faqs() {
  return (
    <div className="faqs">
      <div className="navbarColorSection">
        <Navbar />
      </div>

      <div className="textSection">
        <div className="container">
          <h2>Frequently Asked Questions (FAQs)</h2>

          <h3>Q: How can I view the available flats for sale?</h3>
          <p>
            A: You can view our available flats by visiting our website's
            "Properties" section, where you'll find detailed listings with
            photos, floor plans, and descriptions. You can also contact our
            sales team to schedule a property viewing.
          </p>

          <h3>Q: What is the reservation process for a flat?</h3>
          <p>
            A: To reserve a flat, you'll need to submit a reservation deposit.
            This deposit secures your chosen flat for a specified period while
            you review the purchase agreement and finalize your decision.
          </p>

          <h3>Q: Are the prices of the flats negotiable?</h3>
          <p>
            A: Our prices are carefully set to reflect the market value and
            quality of our properties. While we aim to offer competitive
            pricing, we maintain consistency in our pricing for all customers.
          </p>

          <h3>Q: Can I customize the interior design of my purchased flat?</h3>
          <p>
            A: All customization options will be available agter construction.
            Please inquire with our sales team for details.
          </p>

          <h3>Q: What payment options are available for flat purchases?</h3>
          <p>
            A: We offer various payment plans, including down payments and
            installment plans, based on the project and the stage of
            construction. Our sales team can provide you with detailed
            information on available payment options.
          </p>

          <h3>Q: Can I sell my flat before the project is completed?</h3>
          <p>
            A: While you may have the option to sell your flat before
            completion, it's important to review the terms and conditions of
            your purchase agreement. Some agreements might have restrictions or
            requirements related to selling prior to handover.
          </p>

          <h3>Q: What is included in the flat's purchase price?</h3>
          <p>
            A: The purchase price typically includes the cost of the flat
            itself. Additional costs, such as registration fees, taxes, and
            utility connections, may vary based on local regulations and project
            specifics.
          </p>

          <h3>Q: How do I know when my flat will be ready for handover?</h3>
          <p>
            A: We provide estimated completion dates for each project. However,
            construction timelines can be affected by various factors. We'll
            keep you updated on the progress and notify you in advance of the
            handover date.
          </p>

          <h3>Q: Is there a warranty for the flats I purchase?</h3>
          <p>
            A: Yes, our flats come with a warranty as provided by law. The
            warranty period and coverage details will be outlined in your
            purchase agreement.
          </p>

          <h3>Q: What happens if I need assistance after I move in?</h3>
          <p>
            A: Our customer support team is available to assist you with any
            issues that may arise after you move into your flat.
          </p>

          <h3>You have the right to:</h3>
          <p>
            1. Access, correct, or update your personal information by
            contacting us.
          </p>

          <h3>Q: Can I buy a flat as an investment property?</h3>
          <p>
            A: Absolutely, many of our clients purchase flats as investment
            properties. Our sales team can provide information about potential
            rental income, market trends, and investment opportunities.
          </p>

          <h3>Q: Are there any additional fees I should be aware of?</h3>
          <p>
            A: Apart from the purchase price, there may be fees such as
            maintenance charges, and property management fees. Our sales team
            can provide a breakdown of all potential fees.
          </p>

          <h3>
            Q: What happens if there are delays in the construction process?
          </h3>
          <p>
            A: Delays in construction can occur due to unforeseen circumstances.
            If such delays occur, we will keep you informed about the new
            estimated completion date and any compensation measures, if
            applicable.
          </p>

          <h5 style={{ marginTop: "40px" }}>
            For any further inquiries or specific questions, feel free to reach
            out to our dedicated sales team via phone or email.
          </h5>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Faqs;
