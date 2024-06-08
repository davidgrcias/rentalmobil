import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="footer-heading mb-4">
                City Park <br /> Car Rental
              </h2>
              <p className="footer-contact">
                <p>
                  <i class="fa fa-contact"></i>{" "}
                  <a
                    href="mailto:cityparkcarrental@gmail.com"
                    className="footer-contact-email"
                  >
                    cityparkcarrental@gmail.com
                  </a>
                </p>
                <p>
                  <i class="fa fa-whatsapp"></i> 0813-1883-3544 (Afri)
                </p>
                <p>
                  <i class="fa fa-whatsapp"></i> 0813-1779-6129 (Lena)
                </p>
                <p>Apartemen City Park, Cengkareng, Jakarta Barat</p>
              </p>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <div className="border-top pt-5">
                <p>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright 2024 © All rights reserved | This website is created
                  with&nbsp;
                  <i
                    className="icon-heart text-danger"
                    aria-hidden="true"
                  />{" "}
                  by&nbsp;
                  <a href="https://youtube.com/davidgtech" target="_blank">
                    David G Tech
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
