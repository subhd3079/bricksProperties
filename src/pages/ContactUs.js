import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/common.css";
import "../css/contactUs.css";

function ContactUs() {
  const { pathname } = useLocation();
  const [inputs, setInputs] = useState({});
  const form = useRef();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v2em0be",
        "template_7vzncqj",
        form.current,
        "ZgaC7KkPtuUPjnCAl"
      )
      .then(
        (result) => {
          console.log(result.text);

          const name = e.target.name;
          setInputs({ [name]: "" });

          alert("Your message has been sent (Thank You).");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="contactUS">
      <div className="navbarColorSection">
        <Navbar />
      </div>

      <div className="container">
        <div className="contactUsDiv">
          <div className="leftSection">
            <div className="contactGridSection">
              <div className="contactGridDiv">
                <div>
                  <img src="https://i.ibb.co/9tv7Gxv/call-Yellow.png" />
                </div>
                <p>Phone</p>
                <p>+917699991135</p>
              </div>
              <div className="contactGridDiv">
                <div>
                  <img src="https://i.ibb.co/dQy2nGr/time-Yellow.png" />
                </div>
                <p>Open Hours</p>
                <p>
                  10am - 7pm <br />
                  (Every Day)
                </p>
              </div>
              <div className="contactGridDiv">
                <div>
                  <img src="https://i.ibb.co/Nypc75C/mail-Yellow.png" />
                </div>
                <p>Email</p>
                <p>
                  helpdeskbproperties
                  <br />
                  @gmail.com
                </p>
              </div>
              <div className="contactGridDiv">
                <div>
                  <img src="https://i.ibb.co/zXM4J9r/location-Yellow.png" />
                </div>
                <p>Location</p>
                <p>
                  A-64, S.S.B. Sarani, Sector 2(C), Bank Colony More,
                  Bidhannagar, Paschim Bardhaman, 713212, West Bengal, India
                </p>
              </div>
            </div>
            <div className="mapSection">
              <img src="https://i.ibb.co/BPwYdd7/Screenshot-2023-07-26-191225.png" />
            </div>
          </div>

          <div className="rightSection">
            <p className="darkBlueBigText">Get in Touch</p>
            <p className="blackSmallText">
              Ready to take first step? Get in touch with our friendly team and
              start your happy journey today!
            </p>

            <form ref={form} onSubmit={sendEmail}>
              <input
                className="blackInputSection"
                placeholder="Name *"
                type="text"
                name="name_input"
                value={inputs.name_input || ""}
                onChange={handleChange}
                required
              />

              <input
                className="blackInputSection"
                placeholder="Email *"
                type="email"
                name="email_input"
                value={inputs.email_input || ""}
                onChange={handleChange}
                required
              />

              <input
                className="blackInputSection"
                placeholder="Contact No (Optional but Recommended)"
                type="number"
                name="mobile_input"
                value={inputs.mobile_input || ""}
                onChange={handleChange}
                min="1000000000"
                max="9999999999"
                maxLength="10"
              />

              <textarea
                placeholder="Type Your Message Here..."
                name="message_box"
                value={inputs.message_box || ""}
                onChange={handleChange}
              ></textarea>

              <button className="blueSolidButton" type="submit" value="Send">
                Send Message
              </button>
            </form>

            <div className="socialSection">
              <div>
                <a
                  href="https://www.facebook.com/bpropertieshomes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://i.ibb.co/PmB1mq5/facebook.png" />
                  <p>Facebook</p>
                </a>
              </div>

              <div>
                <a>
                  <img src="https://i.ibb.co/HDrYCTw/instagram.png" />
                  <p>Instagram</p>
                </a>
              </div>

              <div>
                <a>
                  <img src="https://i.ibb.co/Y0zmV1r/linkedin.png" />
                  <p>Linked In</p>
                </a>
              </div>

              <div>
                <a>
                  <img src="https://i.ibb.co/GVHCfqc/twitter.png" />
                  <p>Twitter</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;
