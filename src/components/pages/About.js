import React, { Fragment } from "react";

const About = props => {
  return (
    <Fragment>
      <h1 className="display-4" style={aboutStyle}>
        About This App
      </h1>
      <p className="lead" style={aboutStyle}>
        App to search GitHub Users
      </p>
      <p className="text-secondary" style={aboutStyle}>
        Version 1.0.0
      </p>
    </Fragment>
  );
};

const aboutStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export default About;
