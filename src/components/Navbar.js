import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div>
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>
        <header className="site-navbar site-navbar-target" role="banner">
          <div className="container">
            <div className="row align-items-center position-relative">
              <div className="col-3 ">
                <div className="site-logo">
                  <NavLink className="navbar-brand" to="/">
                    <img
                      className="floating-logo"
                      src="/assets/img/logo.png"
                      style={{
                        height: "5.2em",
                        marginLeft: "0em",
                      }}
                    />
                  </NavLink>
                </div>
              </div>
              <div className="col-9 text-right padding-top">
                <span className="d-inline-block d-lg-none">
                  <a
                    href="#"
                    className="text-white site-menu-toggle js-menu-toggle py-5 text-white"
                  >
                    <span className="icon-menu h3 text-white" />
                  </a>
                </span>
                <nav
                  className="site-navigation text-right ml-auto d-none d-lg-block"
                  role="navigation"
                >
                  <ul className="site-menu main-menu js-clone-nav ml-auto ">
                    <li className="active">
                      <a href="/" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#mobil" className="nav-link">
                        Mobil
                      </a>
                    </li>
                    <li>
                      <a href="#biaya" className="nav-link">
                        Biaya
                      </a>
                    </li>
                    <li>
                      <a href="#mengapa" className="nav-link">
                        Mengapa?
                      </a>
                    </li>
                    <li>
                      <a href="#kontak" className="nav-link">
                        Kontak
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
