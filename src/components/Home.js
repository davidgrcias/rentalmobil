import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="ftco-blocks-cover-1">
        <div
          className="ftco-cover-1 overlay"
          style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
        >
          <div className="container-lg max-w-screen-xl hero-caption">
            {/* Theme title */}
            <div className="row g-6 align-items-center">
              <div className="col-lg-7 mx-auto text-lg-center">
                {/* Title */}
                <h1 className="ls-tight font-bolder display-4 mb-7 top">
                  Rental Mobil <span className="city-park">City Park</span>
                </h1>
                {/* Text */}
                <p className="lead mb-12 mid">
                  Selamat datang di situs Rental Mobil City Park! Kami
                  menyediakan jasa rental mobil murah lepas kunci dan dengan
                  sopir harian, mingguan, dan bulanan, dengan harga mulai dari
                  Rp 300.000 saja.
                </p>
                {/* Form */}

                <a
                  href="contact.html"
                  className="ml-auto btn btn-primary bottom"
                >
                  Sewa Sekarang!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h3 className="offer-title">Penawaran Kami</h3>
              <p className="mb-4 offer-desc">
                Harga mobil belum termasuk bensin dan tol. <br />
                Dapatkan diskon Rp 20k/hari untuk setiap hari selanjutnya jika
                lebih dari 3 hari!
              </p>
              <p>
                <a href="#" className="btn btn-primary custom-prev offer-nav">
                  Previous
                </a>
                <span className="mx-2">/</span>
                <a href="#" className="btn btn-primary custom-next offer-nav">
                  Next
                </a>
              </p>
            </div>
            <div className="col-lg-9">
              <div className="nonloop-block-13 owl-carousel">
                <div className="item-1">
                  <a href="#">
                    <img
                      src="/assets/img/toyotaraize.png"
                      alt="Image"
                      className="img-fluid"
                    />
                  </a>
                  <div className="item-1-contents">
                    <div className="text-center">
                      <h3>
                        <a href="#" className="offer-car-title">
                          Toyota Raize GR Sport
                        </a>
                      </h3>

                      <div className="rent-price">
                        <span>Rp 420k/</span>hari
                      </div>
                    </div>
                    <ul className="specs">
                      <li>
                        <span>Jenis Kendaraan</span>
                        <span className="spec">SUV</span>
                      </li>
                      <li>
                        <span>Tahun</span>
                        <span className="spec">2022</span>
                      </li>
                      <li>
                        <span>CC</span>
                        <span className="spec">1500 CC</span>
                      </li>
                      <li>
                        <span>AC</span>
                        <span className="spec">Single Blower</span>
                      </li>
                      <li>
                        <span>Transmisi</span>
                        <span className="spec">Matic</span>
                      </li>
                      <li>
                        <span>Kursi</span>
                        <span className="spec">4</span>
                      </li>
                    </ul>
                    <div className="d-flex action">
                      <a
                        href="contact.html"
                        className="btn btn-primary offer-nav"
                      >
                        Sewa Sekarang&nbsp;&nbsp;
                        <i class="fa fa-whatsapp" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item-1">
                  <a href="#">
                    <img
                      src="images/img_2.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </a>
                  <div className="item-1-contents">
                    <div className="text-center">
                      <h3>
                        <a href="#" className="offer-car-title">
                          Toyota Avanza
                        </a>
                      </h3>

                      <div className="rent-price">
                        <span>Rp 310k/</span>hari
                      </div>
                    </div>
                    <ul className="specs">
                      <li>
                        <span>Jenis Kendaraan</span>
                        <span className="spec">MPV</span>
                      </li>
                      <li>
                        <span>Tahun</span>
                        <span className="spec">2024</span>
                      </li>
                      <li>
                        <span>CC</span>
                        <span className="spec">1500 CC</span>
                      </li>
                      <li>
                        <span>AC</span>
                        <span className="spec">Double Blower</span>
                      </li>
                      <li>
                        <span>Transmisi</span>
                        <span className="spec">Manual</span>
                      </li>
                      <li>
                        <span>Kursi</span>
                        <span className="spec">6</span>
                      </li>
                    </ul>
                    <div className="d-flex action">
                      <a
                        href="contact.html"
                        className="btn btn-primary offer-nav"
                      >
                        Sewa Sekarang&nbsp;&nbsp;
                        <i class="fa fa-whatsapp" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section pt-0 pb-0 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form className="trip-form">
                <div className="row align-items-center mb-4">
                  <div className="col-md-6">
                    <h3 className="m-0">Hitung perkiraan total biaya</h3>
                  </div>
                  <div className="col-md-6 text-md-right">
                    <span className="text-primary">2</span>{" "}
                    <span>mobil tersedia</span>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-3">
                    <label htmlFor="cf-1">Jenis mobil</label>
                    <select
                      id="cf-1"
                      placeholder="Jenis Mobil"
                      className="form-control"
                    >
                      <option value="raize">Raize</option>
                      <option value="raize">Avanza</option>
                    </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="cf-1">Fasilitas</label>
                    <select
                      id="cf-1"
                      placeholder="Fasilitas"
                      className="form-control"
                    >
                      <option value="lepaskunci">
                        Lepas kunci (direkomendasikan)
                      </option>
                      <option value="dengansopir">Dengan sopir</option>
                    </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="cf-3">Tanggal mulai</label>
                    <input
                      type="text"
                      id="cf-3"
                      placeholder="Pilih tanggal mulai"
                      className="form-control datepicker px-3"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="cf-4">Tanggal kembali</label>
                    <input
                      type="text"
                      id="cf-4"
                      placeholder="Pilih tanggal kembali"
                      className="form-control datepicker px-3"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <button className="btn btn-primary" type="button">
                      Hitung
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
