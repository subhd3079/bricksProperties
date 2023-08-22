function Project({image, alt, address, text}) {
  return (
    <div className="project">
      <div className="container">
        <div className="propertiesDiv">
          <div>
            <img
              src={image}
              alt={alt}
            />
          </div>
          <div>
            <p className="darkBlueBigText">PATIKRIT COMPLEX</p>
            <p className="blackSmallText">
              {address}
            </p>
          </div>
          <p className="blackPara">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
