import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopButton from "../components/TopButton";

import "../css/common.css";
import "../css/properties.css";

function Properties() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="properties">
      {/* top button */}
      <TopButton />

      <div className="navbarColorSection">
        <Navbar />
      </div>

      <div className="propertiesImageSection">
        <p>THE KEYS TO YOUR HOME</p>
      </div>

      <div className="allPropertiesSection">
        <div className="container">
          <div className="propertiesDiv">
            <div>
              <img
                src="https://i.ibb.co/bHspLV3/patikrit-Complex.png"
                alt="Project Image"
              />
            </div>
            <div>
              <p className="darkBlueBigText">PATIKRIT COMPLEX</p>
              <p className="blackSmallText">
                Bank Colony More, Bidhannagar, Durgapur, Paschim Bardhaman,
                713212, West Bengal
              </p>
            </div>
            <p className="blackPara">
              Aliquam. Blandit interdum enim sociosqu accumsan ultricies cum
              Natoque ad aliquam, venenatis, aliquam ultricies imperdiet
              inceptos fermentum est dictum aliquam donec. Sollicitudin. Aptent
              congue tristique. Ac litora vitae conubia ridiculus habitasse.
              <br />
              Litora vitae. Feugiat sollicitudin nostra est parturient sodales
              feugiat condimentum vivamus. Lacus fringilla viverra. Class Nullam
              aliquam, at porttitor placerat lobortis morbi nullam justo
              dictumst ligula pharetra. Scelerisque dolor lectus. Consequat nunc
              elementum porta, fames sapien. A eros. Vel imperdiet ac pretium
              sociis.
              <br />
              Luctus convallis urna. Tristique lobortis eleifend cras. Dolor.
              Justo leo Elit id. Senectus ad. Ut. Lacus eu dictum. Curabitur
              etiam primis felis. Sed ullamcorper viverra augue.
            </p>
          </div>

          <hr />

          <div className="propertiesDiv">
            <div>
              <img
                src="https://i.ibb.co/71SCM00/mangalmurti-Apertment.png"
                alt="Project Image"
              />
            </div>
            <div>
              <p className="darkBlueBigText">MANGALMURTI APERTMENT</p>
              <p className="blackSmallText">
                Bank Colony More, Bidhannagar, Durgapur, Paschim Bardhaman,
                713212, West Bengal
              </p>
            </div>
            <p className="blackPara">
              Aliquam. Blandit interdum enim sociosqu accumsan ultricies cum
              Natoque ad aliquam, venenatis, aliquam ultricies imperdiet
              inceptos fermentum est dictum aliquam donec. Sollicitudin. Aptent
              congue tristique. Ac litora vitae conubia ridiculus habitasse.
              <br />
              Litora vitae. Feugiat sollicitudin nostra est parturient sodales
              feugiat condimentum vivamus. Lacus fringilla viverra. Class Nullam
              aliquam, at porttitor placerat lobortis morbi nullam justo
              dictumst ligula pharetra. Scelerisque dolor lectus. Consequat nunc
              elementum porta, fames sapien. A eros. Vel imperdiet ac pretium
              sociis.
              <br />
              Luctus convallis urna. Tristique lobortis eleifend cras. Dolor.
              Justo leo Elit id. Senectus ad. Ut. Lacus eu dictum. Curabitur
              etiam primis felis. Sed ullamcorper viverra augue.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Properties;
