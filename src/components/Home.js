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
                  menyediakan jasa rental mobil murah lepas kunci dengan harga
                  mulai dari Rp345.000 saja.
                </p>
                {/* Form */}

                <a href="#mobil" className="ml-auto btn btn-primary bottom">
                  Pilih Mobil Sekarang!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section bg-light" id="mobil">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h3 className="offer-title">Mobil Kami</h3>
              <p className="mb-4 offer-desc">
                Harga mobil belum termasuk bensin, tol, dan parkir. <br />
                Dapatkan diskon Rp20k/hari untuk setiap hari selanjutnya jika
                lebih dari 5 hari dalam sekali sewa!
              </p>
              <p>
                <a href="#" className="btn btn-primary custom-prev offer-nav">
                  Prev
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
                        <span>Rp420k/</span>hari (JaBoDeTaBek)
                      </div>
                      <div className="rent-price">
                        <span>Rp495k/</span>hari (Luar JaBoDeTaBek)
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
                        <span className="spec">1000 CC Turbo</span>
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
                        href="https://www.youtube.com/watch?v=BFS9n4B_2xA"
                        className="btn btn-primary offer-nav"
                        target="_blank"
                      >
                        <i class="fa fa-play" aria-hidden="true"></i> Video
                      </a>{" "}
                      &nbsp;&nbsp;
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
                      src="/assets/img/toyotaavanza.png"
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
                        <span>Rp345k/</span>hari (JaBoDeTaBek)
                      </div>
                      <div className="rent-price">
                        <span>Rp425k/</span>hari (Luar JaBoDeTaBek)
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
                        <span className="spec">1300 CC</span>
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
                        href="https://www.youtube.com/watch?v=BFS9n4B_2xA"
                        target="_blank"
                        className="btn btn-primary offer-nav"
                      >
                        <i class="fa fa-play" aria-hidden="true"></i> Video
                      </a>{" "}
                      &nbsp;&nbsp;
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

      <div className="site-section pt-0 pb-0 bg-light" id="biaya">
        <div className="container">
          <div className="row">
            <div className="col-12 hitung-biaya">
              <form className="trip-form">
                <div className="row align-items-center mb-4">
                  <div className="col-md-6">
                    <h3 className="m-0">
                      Hitung Total Biaya : Rp
                      <span className="total-biaya" id="total-biaya">
                        0
                      </span>
                    </h3>
                  </div>
                  <div className="col-md-6 text-md-right">
                    <span>Anda dapat menghitung total biaya disini!</span>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-3">
                    <label htmlFor="cf-1">Jenis mobil</label>
                    <select
                      id="cf-1"
                      placeholder="Jenis Mobil"
                      className="form-control"
                      name="jenismobil"
                    >
                      <option value="raize">Raize</option>
                      <option value="raize">Avanza</option>
                    </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="cf-1">Tujuan</label>
                    <select
                      id="cf-1"
                      placeholder="Fasilitas"
                      className="form-control"
                      name="fasilitas"
                    >
                      <option value="dengansopir">Hanya JaBoDeTaBek</option>
                      <option value="lepaskunci">Luar JaBoDeTaBek</option>
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
                  <div className="col-lg-6"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="site-section section-3"
        style={{ backgroundImage: 'url("images/hero_2.jpg")' }}
        id="mengapa"
      >
        <div className="container">
          <div className="row ">
            <div className="col-12 text-center mb-5 ">
              <h2 className="text-white">
                Mengapa Harus Menggunakan Jasa Kami?
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="service-1">
                <span className="service-1-icon">
                  <span className="fa fa-dollar" />
                </span>
                <div className="service-1-contents">
                  <h3>Harga Terjangkau</h3>
                  <p>Harga yang kami berikan mulai dari Rp345k saja.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-1">
                <span className="service-1-icon">
                  <span className="fa fa-clock-o" />
                </span>
                <div className="service-1-contents">
                  <h3>Support 24/7</h3>
                  <p>Kami siap melayani 24 jam setiap hari.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-1">
                <span className="service-1-icon">
                  <span className="fa fa-car" />
                </span>
                <div className="service-1-contents">
                  <h3>Mobil Terawat</h3>
                  <p>Mobil yang kami sewakan tentunya bersih dan terawat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section bg-light" id="kontak">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-7 text-center mb-5">
              <h2>Hubungi Kami (City Park Car Rental)</h2>
              <p>
                Silahkan hubungi kami kapanpun jika Anda memiliki pertanyaan
                atau saran mengenai layanan kami!
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 mb-5">
              <form action="#" method="post">
                <div class="form-group row">
                  <div class="col-md-6 mb-4 mb-lg-0">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nama"
                      name="nama"
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nomor Telepon"
                      name="nomortelepon"
                      required
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email"
                      name="email"
                      required
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <textarea
                      name="pesan"
                      id=""
                      class="form-control"
                      placeholder="Pesan/Pertanyaan"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6 mr-auto">
                    <input
                      type="submit"
                      class="btn btn-block btn-primary text-white py-3 px-5"
                      value="Kirim Pesan"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-4 ml-auto">
              <div class="bg-white p-3 p-md-5">
                <h3 class="text-black mb-4">Info Kontak</h3>
                <ul class="list-unstyled footer-link">
                  <li class="d-block mb-3">
                    <span class="d-block text-black">Alamat:</span>
                    <span>
                      Apartemen City Park Cengkareng, RT.7/RW.14, Cengkareng
                      Timur, Cengkareng, Jakarta Barat, DKI Jakarta
                    </span>
                  </li>
                  <li class="d-block mb-3">
                    <span class="d-block text-black">Nomor Telepon:</span>
                    <span>0813-1883-3544 (Afri)</span>
                    <br />
                    <span>0813-1779-6129 (Lena)</span>
                  </li>
                  <li class="d-block mb-3">
                    <span class="d-block text-black">Email:</span>
                    <span>cityparkcarrental@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
