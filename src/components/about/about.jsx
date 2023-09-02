import React from "react";
import "./about.css"

export const About = (props) => {
  return (
    <div id="about">
      <div className="container-about">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/image/abouts.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <div className="wrapper">
              <h2>Who <span>we Are</span> </h2>
              </div>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Our <span>Goal</span></h3>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container-about">
        <div className="row">
        <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Our <span>Vision</span></h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              
              
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/image/driver.jpeg" className="img-responsive" alt="" />{" "}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container-about">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/image/about.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Our <span>Mission</span> </h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
