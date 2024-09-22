import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="site-footer" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <img
                src="/assets/img/logo.png"
                alt="Logo"
                className="footer-logo mb-4"
                style={{
                  height: "20.2em",
                }}
              />
              <h2 className="footer-heading mb-4">
                City Park Car Rental / <br /> Rental Mobil City Park
              </h2>
              <p className="footer-contact">
                <p>
                  <i class="fa fa-envelope"></i>{" "}
                  <a
                    href="mailto:cityparkcarrental@gmail.com"
                    className="footer-contact-email"
                  >
                    cityparkcarrental@gmail.com
                  </a>
                </p>
                <p>
                  <i class="fa fa-whatsapp"></i>&nbsp;
                  <a
                    href="https://api.whatsapp.com/send?phone=+6282124688813&text=Hi City Park Car Rental, saya ingin menyewa mobil [merk] untuk [berapa hari] dengan tujuan [tujuan] dari [tanggal mulai] sampai [tanggal kembali]"
                    target="_blank"
                    className="footer-contact-email"
                  >
                    0821-2468-8813 (Rental Mobil City Park Official)
                  </a>
                </p>
                <p>
                  <i class="fa fa-whatsapp"></i>&nbsp;
                  <a
                    href="https://api.whatsapp.com/send?phone=+6281318833544&text=Hi City Park Car Rental, saya ingin menyewa mobil [merk] untuk [berapa hari] dengan tujuan [tujuan] dari [tanggal mulai] sampai [tanggal kembali]"
                    target="_blank"
                    className="footer-contact-email"
                  >
                    0813-1883-3544 (Afri)
                  </a>
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
