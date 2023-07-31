import { useEffect, useState } from "react";

import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/common.css"
import "../css/home.css"

import projectData from "../data/projectData"
import { NavLink } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [])

  return (
    <div className="home">


      {/* hero section */}
      <section className="heroSection" id="home">
        <Navbar />
        
        <div className="firstContainer">
          <div className="mainSection">
            <div className="mainImageSection">
              <img src="https://i.ibb.co/FznMXTC/main-Section-Image.png" />
            </div>
            <div className="mainTextSection">
              <p className="yellowSmallText mainYellowText">Make Your Dream True</p>
              <p className="whiteBigText mainHeadingText">
                Boost Your<br />
                Lifestyle Find Your<br />
                Perfect <span className="yellowSpanText">Home</span> Today
              </p>
              <p className="whitePara mainParaText">
                Welcome to our real estate platform, where your dreams of finding the perfect home becomes the reality
              </p>
              <form className="heroEmailForm">
                <input type="email" name="" placeholder="Email" className="whiteInputSection" />
                <button type="submit" className="yellowSolidButton">Contact</button>
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
              <p className="lightBlueBigText">54<sup>+</sup></p>
              <p className="darkBlueSmallText">Completed Projects</p>
            </div>
          </div>
          <div className="projectGridSection">
            {loading ? <Loader /> : projectData.map(ele => (
              <div key={ele.name}>
                <div><img src={ele.image} /></div>
                <p className="darkBlueSmallText">{ele.name}</p>
                <p className="blackSmallText">{ele.place}</p>
              </div>
            ))}

          </div>

          <div className="projectButtonSection">
            <NavLink to="/properties"><button className="blueSolidButton">View All Projects →</button></NavLink>
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
                Vehicula turpis aliquet facilisi dolor cras interdum lorem sed. Ante, odio. Pretium ligula. Justo. Lectus nibh semper cubilia suscipit className urna nostra natoque eros nam.
              </p>
              <div><NavLink to="/interior"><button className="blueGhostButton">More</button></NavLink></div>
            </div>
            <div className="interiorRightSection">
              <img src="https://i.ibb.co/8dVdr2W/interior-Section-Image.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* about us section */}
      <section className="aboutUsSection" id="aboutus">
        <div className="container">
          <div className="aboutUpperSection">
            <div>
              <img src="https://i.ibb.co/wWxM7h2/about-Section-Image.jpg" />
            </div>
            <div>
              <p className="yellowSmallText">About Us</p>
              <p className="whiteBigText">
                Your<br />
                <span className="yellowSpanText">Trusted</span><br />
                Partner in<br />
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
              <NavLink to="/aboutus"><button className="blueSolidButton">Know More →</button></NavLink>
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
              Orci feugiat aptent est cum sociosqu cubilia. Ridiculus vivamus donec tortor metus penatibus metus. Ultricies. Adipiscing pede purus per pede.
            </p>
          </div>

          <div className="serviceGridSection">
            <div>
              <div><img src="https://i.ibb.co/rtXp0W6/home-Loan-Image.png" /></div>
              <p className="darkBlueSmallText">Home Loan</p>
              <p className="blackSmallText">
                Blandit dui hymenaeos torquent pede. A iaculis primis.
              </p>
            </div>
            <div>
              <div><img src="https://i.ibb.co/bNgY5DW/legal-Service-Image.png" /></div>
              <p className="darkBlueSmallText">Legal Services</p>
              <p className="blackSmallText">
                Blandit dui hymenaeos torquent pede. A iaculis primis.
              </p>
            </div>
            <div>
              <div><img src="https://i.ibb.co/FDn69X8/painting-Image.png" /></div>
              <p className="darkBlueSmallText">Painting</p>
              <p className="blackSmallText">
                Blandit dui hymenaeos torquent pede. A iaculis primis.
              </p>
            </div>
            <div>
              <div><img src="https://i.ibb.co/tBP2Xb1/vastu-Image.png" /></div>
              <p className="darkBlueSmallText">Vastu</p>
              <p className="blackSmallText">
                Blandit dui hymenaeos torquent pede. A iaculis primis.
              </p>
            </div>
            <div>
              <div><img src="https://i.ibb.co/kgP9vQ5/furniture-Image.png" /></div>
              <p className="darkBlueSmallText">Furniture & Appliances</p>
              <p className="blackSmallText">
                Blandit dui hymenaeos torquent pede. A iaculis primis.
              </p>
            </div>
            <div>
              <div><img src="https://i.ibb.co/8YBk3wQ/security-Image.png" /></div>
              <p className="darkBlueSmallText">Security & Support</p>
              <p className="blackSmallText">
                Blandit dui hymenaeos torquent pede. A iaculis primis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home;

