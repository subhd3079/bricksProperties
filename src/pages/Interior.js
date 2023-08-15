import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/common.css";
import "../css/interior.css";

import interiorData from "../data/interiorData";

function Interior() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="interior" id="interior">
      <div className="navbarColorSection">
        <Navbar />
      </div>

      <div className="interiorImageSection">
        <div className="blueBellLogo">
          {/* <img src={require("../images/blueBellLogo.jpg")} /> */}
        </div>
        <div className="interiorTitle">
          <p className="whiteBigText">
            Turning a House
            <br />
            into a Home
          </p>
        </div>
      </div>

      <div className="container">
        <div className="interiorGridSection">
          {loading ? (
            <Loader />
          ) : (
            interiorData.map((ele) => (
              <div className="interiorGridDiv" key={ele.title}>
                <div>
                  <img src={ele.image} />
                </div>
                <div>
                  <p className="darkBlueSmallText">{ele.title}</p>
                  <p className="blackSmallText">{ele.des}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Interior;
