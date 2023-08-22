import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopButton from "../components/TopButton";

import "../css/common.css";
import "../css/home.css";

import projectData from "../data/projectData";
import serviceData from "../data/serviceData";
import { NavLink } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const form = useRef();
  const {id} = useParams();

  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);
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

          setInput("");

          alert("Your message has been sent (Thank You).");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="home">
      {/* top button */}
      <TopButton />

      {/* hero section */}
      <section className="heroSection" id="home">
        <Navbar />

        <div className="firstContainer">
          <div className="mainSection">
            <div className="mainImageSection">
              <img
                src="https://i.ibb.co/FznMXTC/main-Section-Image.png"
                alt="Main Section Image"
              />
            </div>
            <div className="mainTextSection">
              <p className="yellowSmallText mainYellowText">
                Make Your Dream True
              </p>
              <p className="whiteBigText mainHeadingText">
                Boost Your
                <br />
                Lifestyle Find Your
                <br />
                Perfect <span className="yellowSpanText">Home</span> Today
              </p>
              <p className="whitePara mainParaText">
                Welcome to our real estate platform, where your dreams of
                finding the perfect home becomes the reality
              </p>
              <form className="heroEmailForm" ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  placeholder="Email / Contact No. *"
                  className="whiteInputSection"
                  name="name_input"
                  value={input || ""}
                  onChange={handleChange}
                  required
                />

                <button
                  type="submit"
                  value="Send"
                  className="yellowSolidButton"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* project section */}
      <section className="projectSection" id="properties">
        <div className="container">
          <div className="projectTitleSection">
            <div className="projectTitleLeft">
              <p className="lightBlueSmallText">What We Build</p>
              <p className="darkBlueBigText">Featured Projects</p>
            </div>
            <div className="projectTitleRight">
              <p className="lightBlueBigText">
                54<sup>+</sup>
              </p>
              <p className="darkBlueSmallText">Completed Projects</p>
            </div>
          </div>
          <div className="projectGridSection">
            {loading ? (
              <Loader />
            ) : (
              projectData.map((ele) => (
                <NavLink to={`/properties/${id}`} key={ele.name}>
                  <div>
                    <img src={ele.image} alt={ele.alt} />
                  </div>
                  <p className="darkBlueSmallText">{ele.name}</p>
                  <p className="blackSmallText">{ele.place}</p>
                </NavLink>
              ))
            )}
          </div>

          <div className="projectButtonSection">
            <NavLink to="/properties">
              <button className="blueSolidButton">View All Projects →</button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* interior section */}
      <section className="interiorSection" id="interior">
        <div className="container">
          <div className="interiorSectionDiv">
            <div className="interiorLeftSection">
              <p className="lightBlueBigText">Modern Interior</p>
              <p className="blackSmallText">
                Step inside and feel at home. Our interiors are designed for
                comfort and style, making every moment enjoyable. Discover a
                space where beauty and function come together seamlessly.
              </p>
              <div>
                <NavLink to="/interior">
                  <button className="blueGhostButton">More</button>
                </NavLink>
              </div>
            </div>
            <div className="interiorRightSection">
              <img
                src="https://i.ibb.co/2sBsvPD/interior-Section-Image.jpg"
                at="Interior Section Image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* about us section */}
      <section className="aboutUsSection" id="aboutus">
        <div className="container">
          <div className="aboutUpperSection">
            <div>
              {/* <img src={require("../images/aboutSectionImage.jpg")} alt="About Section Image" /> */}
            </div>
            <div>
              <p className="yellowSmallText">About Us</p>
              <p className="whiteBigText">
                Your
                <br />
                <span className="yellowSpanText">Trusted</span>
                <br />
                Partner in
                <br />
                Real Estate
              </p>
            </div>
          </div>
          <div className="aboutLowerSection">
            <div>
              <div>
                <p>1467+</p>
                <p>Top Selling Products</p>
              </div>
              <div>
                <p>2568+</p>
                <p>Most Satified Customers</p>
              </div>
            </div>
            <div>
              <NavLink to="/aboutus">
                <button className="blueSolidButton">Know More →</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* service section */}
      <section className="serviceSection" id="services">
        <div className="container">
          <div>
            <p className="lightBlueSmallText">Services</p>
            <p className="darkBlueBigText">
              A Valuable Investment for You & Your Family
            </p>
            <p className="blackPara">
              Transform your property dreams into reality with our expert
              services, guiding you through every step of buying, selling, or
              renting with confidence.
            </p>
          </div>

          <div className="serviceGridSection">
            {loading ? (
              <Loader />
            ) : (
              serviceData.map((ele) => (
                <div>
                  <div>
                    <img src={ele.image} alt={ele.alt} />
                  </div>
                  <p className="darkBlueSmallText">{ele.name}</p>
                  <p className="blackSmallText">{ele.para}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
