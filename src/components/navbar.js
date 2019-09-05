import React from "react";
import "../Abhishek.css";
import "../style/navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <a
          className="navbar-brand"
          href="arrbxr.github.io"
          style={{ "font-family": "Noto Serif, serif" }}
        >
          ABHISHEK RAJ RAVI
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars" style={{ color: "aqua" }}></span>
        </button>

        <div
          className="collapse navbar-collapse navbar-nav-custom"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a
                className="text-center nav-link smooth-scroll"
                href="#home-section"
              >
                <i className="fa fa-home"></i> Home{" "}
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="text-center nav-link smooth-scroll"
                href="#about-section"
              >
                <i className="fa fa-user-o"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a className="text-center nav-link disabled" href="#">
                <i className="fa fa-code"></i> Project
              </a>
            </li>
            <li className="text-center nav-item">
              <a
                className="nav-link"
                data-toggle="modal"
                data-target="#exampleModalLong"
                href="#"
              >
                <i className="fa fa-commenting"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div
        className="message"
        data-toggle="modal"
        data-target="#exampleModalLong"
      >
        <i className="fa fa-envelope-open fa-2x"></i>
      </div>

      <div
        className="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text-center"
                id="exampleModalLongTitle"
              >
                Send Message
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="" name="" method="">
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-user"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control text-aqua"
                      id="inlineFormInputGroup"
                      placeholder="Enter Your Name..."
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">@</div>
                    </div>
                    <input
                      type="email"
                      className="form-control text-aqua"
                      id="inlineFormInputGroup"
                      placeholder="Email Address..."
                    />
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control text-aqua"
                    rows="3"
                    placeholder="Enter Here Message..."
                  ></textarea>
                  <small className="text-red">
                    <i className="fa fa-exclamation-circle"></i> Sorry mail
                    system currently not working.{" "}
                  </small>
                </div>
                <div className="text-right">
                  <button type="submit" className="btn btn-outline-aqua">
                    Send <i className="fa fa-paper-plane"></i>{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
