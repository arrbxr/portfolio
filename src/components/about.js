import React from "react";

const About = () => {
  return (
    <section className="about-section py-5" id="about-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-md-3 col-lg-3 col-sm-12">
            <h4
              className="text-md-right"
              style={{ "font-family": "Headland One, serif" }}
            >
              ABOUT&nbsp;&nbsp;&nbsp;{" "}
            </h4>
          </div>
          <div className="col-xl-6 col-md-6 col-lg-6 col-sm-12">
            <div>
              <p>
                My name is Abhishek Raj Ravi. I'm a student of New Govt.
                Polytechnic, Patna-13. My major areas of interested Web
                Development. Currently, I'm able to code in HTML, CSS,
                JavaScript, ReactJs and I'm working to become proficient with
                NodeJs.
              </p>
              <br />
              <p>I, also have an extensive knowledge of C, C++, and Java</p>
              <br />
              <p>
                I am passionate about Open Source, have considerable experience
                with GIT technology, and have been an active open source
                contributor since December 2017.
              </p>
              <br />
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
            <div className="mb-5">
              <a href="resume.pdf" target="_blank">
                <p style={{ "font-family": "Headland One, serif" }}>
                  <i
                    className="fa fa-download fa-2x wow fadeIn infinite"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.5s"
                    aria-hidden="true"
                    style={{ color: "rgb(99, 99, 99)" }}
                  ></i>{" "}
                  GET THE CV
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-xl-3 col-md-3 col-lg-3 col-sm-12">
            <h4
              className="text-md-right"
              style={{ "font-family": "Headland One, serif" }}
            >
              EDUCATION&nbsp;&nbsp;&nbsp;
            </h4>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <h5>Diploma in computer Science & Engineering</h5>
            <p>New Govt. Polytechnic, Patliputra, Patna-13</p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-3">
            <p>2015-2018</p>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 offset-md-3">
            <h5>Bihar School Examination Board, Patna (12th BSEB)</h5>
            <p>Mata Indrani College, Chausa Buxar</p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
            <p>2013-2015</p>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 offset-md-3">
            <h5>Bihar School Examination Board, Patna (10th BSEB)</h5>
            <p>D. P. High School Unuwash, Buxar</p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-3">
            <p>2013</p>
          </div>
        </div>

        <h5
          className="mt-5 text-center i-think"
          style={{ "font-family": "Headland One, serif" }}
        >
          i'm thinking maybe{" "}
        </h5>
        <div className="line2"></div>
        <p
          className="text-center"
          style={{ "font-family": "Josefin Slab, serif" }}
        >
          <i className="fa fa-quote-left fa-2x"></i>
          <span className="quote">
            &nbsp;The man who can be control of himself will be in able to
            conquer the world.&nbsp;
          </span>
          <i className="fa fa-quote-right fa-2x"></i>{" "}
        </p>
      </div>
      <div className="container pt-5 pb-2">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <h4 className="text-center">AROUND THE WEB</h4>
            <div className="line mt-"></div>
            <div className="line2"></div>
            <p className="text-center mt-4">
              <a
                href="https://github.com/abhishekrajravi"
                target="_blank"
                className="mr-3"
              >
                <i className="fa fa-github-square fa-2x github"></i>
              </a>
              <a
                href="https://codepen.io/arrbxr/"
                target="_blank"
                className="mr-3"
              >
                <i className="fa fa-codepen fa-2x codepen"></i>
              </a>
              <a
                href="https://www.freecodecamp.org/arrbxr"
                target="_blank"
                className="mr-3"
              >
                <i className="fa fa-free-code-camp fa-2x free-code-camp"></i>
              </a>
              <a
                href="https://twitter.com/arrbxr"
                target="_blank"
                className="mr-3"
              >
                <i className="fa fa-twitter-square fa-2x medium"></i>
              </a>
              <a href="https://www.facebook.com/arrbxr" target="_blank">
                <i className="fa fa-facebook-square fa-2x facebook"></i>
              </a>
            </p>
            <p className="text-center mb-0">
              <a
                href="mailto:arr.bxr@gmail.com? Subject= The%20Subject&amp;body=Abhishek%20Raj%20Ravi%20"
                className="location"
              >
                <i className="fa fa-envelope-open"></i> arr.bxr@gmail.com
              </a>{" "}
            </p>
            <p className="text-center mb-0">
              <a href="tel:+918862838410" className="location">
                <i className="fa fa-phone-square"> </i> +91 8862838410
              </a>
            </p>
            <p className="text-center location">
              <i className="fa fa-map-marker"></i> Patna, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
