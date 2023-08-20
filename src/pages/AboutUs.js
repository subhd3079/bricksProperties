import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopButton from "../components/TopButton";

import "../css/common.css";
import "../css/aboutUs.css";

function AboutUs() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <div className="aboutUs">
        {/* top button */}
        <TopButton />

        <div className="navbarColorSection">
          <Navbar />
        </div>

        <div className="aboutUsImageSection">
          <p className="whiteBigText">Welcome to Brick Properties</p>
        </div>

        <div className="aboutUsTextSection">
          <div className="container">
            <div className="textSectionDiv ourHistorySection">
              <div>
                <img
                  src="https://i.ibb.co/Thfwp0g/our-History-Image.jpg"
                  alt="Our History Image"
                />
              </div>
              <div>
                <p className="darkBlueBigText">Our History</p>
                <p className="blackSmallText">
                  Molestie metus dictum. Potenti sem blandit nisi conubia
                  praesent habitant consectetuer scelerisque curabitur elit non
                  quis per bibendum nascetur leo eros felis quis eleifend
                  phasellus bibendum nullam malesuada duis congue porta torquent
                  nonummy condimentum ultricies felis per condimentum aliquam
                  varius ipsum et faucibus primis. Parturient ut metus arcu
                  adipiscing etiam. Rhoncus laoreet, velit ornare. Porta odio
                  porttitor praesent aptent, maecenas imperdiet natoque dapibus
                  aenean per interdum dictum Eleifend neque nascetur nascetur,
                  at iaculis non sodales libero porttitor sem mi consequat.
                </p>
              </div>
            </div>

            <div className="textSectionDiv ourVisionSection">
              <div>
                <img
                  src="https://i.ibb.co/hM3N450/our-Vision-Image.jpg"
                  alt="Our Vision Image"
                />
              </div>
              <div>
                <p className="darkBlueBigText">Our Vision</p>
                <p className="blackSmallText">
                  Molestie metus dictum. Potenti sem blandit nisi conubia
                  praesent habitant consectetuer scelerisque curabitur elit non
                  quis per bibendum nascetur leo eros felis quis eleifend
                  phasellus bibendum nullam malesuada duis congue porta torquent
                  nonummy condimentum ultricies felis per condimentum aliquam
                  varius ipsum et faucibus primis. Parturient ut metus arcu
                  adipiscing etiam. Rhoncus laoreet, velit ornare. Porta odio
                  porttitor praesent aptent, maecenas imperdiet natoque dapibus
                  aenean per interdum dictum Eleifend neque nascetur nascetur,
                  at iaculis non sodales libero porttitor sem mi consequat.
                </p>
              </div>
            </div>

            <div className="textSectionDiv ourMissionSection">
              <div>
                <img
                  src="https://i.ibb.co/C75ks7M/our-Mission-Image.jpg"
                  alt="Our Mission Image"
                />
              </div>
              <div>
                <p className="darkBlueBigText">Our Mission</p>
                <p className="blackSmallText">
                  Molestie metus dictum. Potenti sem blandit nisi conubia
                  praesent habitant consectetuer scelerisque curabitur elit non
                  quis per bibendum nascetur leo eros felis quis eleifend
                  phasellus bibendum nullam malesuada duis congue porta torquent
                  nonummy condimentum ultricies felis per condimentum aliquam
                  varius ipsum et faucibus primis. Parturient ut metus arcu
                  adipiscing etiam. Rhoncus laoreet, velit ornare. Porta odio
                  porttitor praesent aptent, maecenas imperdiet natoque dapibus
                  aenean per interdum dictum Eleifend neque nascetur nascetur,
                  at iaculis non sodales libero porttitor sem mi consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
