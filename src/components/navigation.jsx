import React from "react";
import BigLogo from "../logo/logo-big.png";

export const Navigation = (props) => {
  return (
    // <nav id="menu" className="navbar navbar-default">
    //   <div className="container">
    //     <div className="navbar-header">
    //       <button
    //         type="button"
    //         className="navbar-toggle collapsed"
    //         data-toggle="collapse"
    //         data-target="#bs-example-navbar-collapse-1"
    //       >
    //         {" "}
    //         <span className="sr-only">Toggle navigation</span>{" "}
    //         <span className="icon-bar"></span>{" "}
    //         <span className="icon-bar"></span>{" "}
    //         <span className="icon-bar"></span>{" "}
    //       </button>
    //       {/* <a className="navbar-brand page-scroll" href="#page-top">
    //         React Landing Page
    //       </a>{" "} */}
    //       <img
    //         src={BigLogo}
    //         alt="Yu"
    //         className="navbar img-fluid"
    //         style={{ maxWidth: "200px", height: "auto", border: "1px solid red"}}
    //       />
    //     </div>

    //     <div
    //       className="collapse navbar-collapse"
    //       id="bs-example-navbar-collapse-1"
    //     >
    //       <ul className="nav navbar-nav navbar-right">
    //         <li>
    //           <a href="#features" className="page-scroll">
    //             Products
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#about" className="page-scroll">
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#testimonials" className="page-scroll">
    //             Testimonials
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#contact" className="page-scroll">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <nav
      id="menu"
      className="navbar navbar-default"
      style={{ border: "2px solid blue" }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            style={{ marginRight: "15px" }} // Add margin if needed to space out from logo
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <img
            src={BigLogo}
            alt="Yu"
            className="navbar img-fluid"
            style={{ maxWidth: "300px", height: "auto" }}
          />
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
          style={{ display: "flex", alignItems: "center" }}
        >
          <ul
            className="nav navbar-nav navbar-right"
            style={{ display: "flex", alignItems: "center", margin: 0 }}
          >
            <li style={{ marginLeft: "15px" }}>
              <a href="#features" className="page-scroll">
                Products
              </a>
            </li>
            <li style={{ marginLeft: "15px" }}>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li style={{ marginLeft: "15px" }}>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li style={{ marginLeft: "15px" }}>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
