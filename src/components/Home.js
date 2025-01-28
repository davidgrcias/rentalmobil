import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import "./Home.css";
import emailjs from "emailjs-com";
import Kebijakan from "./Kebijakan";

function Home() {
  const [jenismobil, setJenisMobil] = useState("agya");
  const [tujuan, setTujuan] = useState("hanyajabodetabek");
  const [tanggalMulai, setTanggalMulai] = useState("");
  const [tanggalKembali, setTanggalKembali] = useState("");
  const [totalBiaya, setTotalBiaya] = useState(0);
  const [totalDiskon, setTotalDiskon] = useState(0);

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nomortelepon, setNomorTelepon] = useState("");
  const [pesan, setPesan] = useState("");

  useEffect(() => {
    if (tanggalMulai && tanggalKembali) {
      const startDate = new Date(tanggalMulai);
      const endDate = new Date(tanggalKembali);
      const timeDiff = endDate - startDate;
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

      let biayaPerHari = 0;
      switch (jenismobil) {
        case "raize":
          biayaPerHari = tujuan === "hanyajabodetabek" ? 420000 : 450000;
          break;
        case "avanza":
          biayaPerHari = tujuan === "hanyajabodetabek" ? 350000 : 380000;
          break;
        case "agya":
          biayaPerHari = tujuan === "hanyajabodetabek" ? 400000 : 430000;
          break;
        default:
          break;
      }

      let totalBiaya = daysDiff * biayaPerHari;
      let totalDiskon = 0;

      if (daysDiff > 5) {
        const additionalDays = daysDiff - 5;
        if (additionalDays <= 7) {
          totalDiskon = additionalDays * 30000;
        } else if (additionalDays <= 17) {
          totalDiskon = 7 * 30000 + (additionalDays - 7) * 70000;
        } else {
          totalDiskon = 7 * 30000 + 10 * 70000 + (additionalDays - 17) * 100000;
        }
        totalBiaya -= totalDiskon;
      }

      setTotalBiaya(totalBiaya);
      setTotalDiskon(totalDiskon);
    }

    if (window.emailjs) {
      window.emailjs.init("IMhDqFBmKXuSUzNx1"); // Account Public Key
    } else {
      console.error("EmailJS not loaded");
    }
  }, [jenismobil, tujuan, tanggalMulai, tanggalKembali]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    // Check if both selected values match the ID of the displayed game

    // Send email
    const templateParams = {
      nama,
      nomortelepon,
      email,
      pesan,
    };

    emailjs
      .send(
        "service_vzgrtle",
        "template_vvwnvjs",
        templateParams,
        "rTt69g98P7C_ALw-h"
      )
      .then(
        (response) => {
          console.log(
            "Pesan berhasil dikirimkan ke cityparkcarrent@gmail.com!",
            response.status,
            response.text
          );
          alert("Pesan berhasil dikirimkan ke cityparkcarrent@gmail.com!");
        },
        (err) => {
          console.error("Failed to send email. Error:", err);
        }
      );
  };

  const handleDownload = () => {
    const element = document.querySelector(".trip-form");
    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.download = "buktiperhitunganrentalmobilcitypark.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

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
                  mulai dari Rp350.000 saja.
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
                Dapatkan diskon Rp30k/hari untuk setiap hari selanjutnya jika
                lebih dari 5 hari dalam sekali sewa, diskon Rp70k/hari untuk
                setiap hari selanjutnya jika lebih dari 12 hari dalam sekali
                sewa, diskon Rp100k/hari untuk setiap hari selanjutnya jika
                lebih dari 22 hari dalam sekali sewa!
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
                  <a
                    href="https://api.whatsapp.com/send?phone=+6282124688813&text=Hi City Park Car Rental, saya ingin menyewa mobil Toyota Avanza dengan wilayah [JaBoDeTaBek/luar JaBoDeTaBek] dari [tanggal mulai] sampai [tanggal kembali]"
                    target="_blank"
                  >
                    <img
                      src="/assets/img/toyotaavanza.png"
                      alt="Image"
                      className="img-fluid"
                    />
                  </a>
                  <div className="item-1-contents">
                    <div className="text-center">
                      <h3>
                        <a className="offer-car-title">Toyota Avanza</a>
                      </h3>

                      <div className="rent-price">
                        <span>Rp350k/</span>hari (JaBoDeTaBek)
                      </div>
                      <div className="rent-price">
                        <span>Rp380k/</span>hari (Luar JaBoDeTaBek, Max: ±110km)
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
                        href="#"
                        target="_blank"
                        className="btn btn-primary offer-nav"
                      >
                        <i class="fa fa-play" aria-hidden="true"></i> Video
                      </a>{" "}
                      &nbsp;&nbsp;
                      <a
                        href="https://api.whatsapp.com/send?phone=+6282124688813&text=Hi City Park Car Rental, saya ingin menyewa mobil Toyota Avanza dengan wilayah [JaBoDeTaBek/luar JaBoDeTaBek] dari [tanggal mulai] sampai [tanggal kembali]"
                        target="_blank"
                        className="btn btn-primary offer-nav"
                      >
                        Sewa Sekarang&nbsp;&nbsp;
                        <i class="fa fa-whatsapp" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item-1">
                  <a
                    href="https://api.whatsapp.com/send?phone=+6282124688813&text=Hi City Park Car Rental, saya ingin menyewa mobil Toyota Avanza dengan wilayah [JaBoDeTaBek/luar JaBoDeTaBek] dari [tanggal mulai] sampai [tanggal kembali]"
                    target="_blank"
                  >
                    <img
                      src="/assets/img/toyotaagya.webp"
                      alt="Image"
                      className="img-fluid"
                      style={{ height: "290px" }}
                    />
                  </a>
                  <div className="item-1-contents">
                    <div className="text-center">
                      <h3>
                        <a className="offer-car-title">Toyota Agya</a>
                      </h3>

                      <div className="rent-price">
                        <span>Rp400k/</span>hari (JaBoDeTaBek)
                      </div>
                      <div className="rent-price">
                        <span>Rp430k/</span>hari (Luar JaBoDeTaBek, Max: ±110km)
                      </div>
                    </div>
                    <ul className="specs">
                      <li>
                        <span>Jenis Kendaraan</span>
                        <span className="spec">LCGC</span>
                      </li>
                      <li>
                        <span>Tahun</span>
                        <span className="spec">2024</span>
                      </li>
                      <li>
                        <span>CC</span>
                        <span className="spec">1198 CC</span>
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
                        href="#"
                        target="_blank"
                        className="btn btn-primary offer-nav"
                      >
                        <i class="fa fa-play" aria-hidden="true"></i> Video
                      </a>{" "}
                      &nbsp;&nbsp;
                      <a
                        href="https://api.whatsapp.com/send?phone=+6282124688813&text=Hi City Park Car Rental, saya ingin menyewa mobil Toyota Agya dengan wilayah [JaBoDeTaBek/luar JaBoDeTaBek] dari [tanggal mulai] sampai [tanggal kembali]"
                        target="_blank"
                        className="btn btn-primary offer-nav"
                      >
                        Sewa Sekarang&nbsp;&nbsp;
                        <i class="fa fa-whatsapp" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item-1">
                  <a
                    href="https://api.whatsapp.com/send?phone=+6282124688813&text=Hi City Park Car Rental, saya ingin menyewa mobil Toyota Raize dengan wilayah [JaBoDeTaBek/luar JaBoDeTaBek] dari [tanggal mulai] sampai [tanggal kembali]"
                    target="_blank"
                  >
                    <img
                      src="/assets/img/toyotaraize.png"
                      alt="Image"
                      className="img-fluid"
                    />
                  </a>
                  <div className="item-1-contents">
                    <div className="text-center">
                      <h3>
                        <a className="offer-car-title">Toyota Raize GR Sport</a>
                      </h3>

                      <div className="rent-price">
                        <span>Rp420k/</span>hari (JaBoDeTaBek)
                      </div>
                      <div className="rent-price">
                        <span>Rp450k/</span>hari (Luar JaBoDeTaBek, Max: ±110km)
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
                        href="#"
                        className="btn btn-primary offer-nav"
                        target="_blank"
                      >
                        <i class="fa fa-play" aria-hidden="true"></i> Video
                      </a>{" "}
                      &nbsp;&nbsp;
                      <a
                        href="https://api.whatsapp.com/send?phone=+6282124688813&text=Hi City Park Car Rental, saya ingin menyewa mobil Toyota Raize dengan wilayah [JaBoDeTaBek/luar JaBoDeTaBek] dari [tanggal mulai] sampai [tanggal kembali]"
                        target="_blank"
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
                      <span className="hitungTotalBiaya">
                        Hitung Total Biaya : Rp
                        <span className="total-biaya" id="total-biaya">
                          {totalBiaya.toLocaleString()}
                        </span>
                        <br />
                        <small>
                          Total Diskon: Rp
                          <span className="total-diskon" id="total-diskon">
                            {totalDiskon.toLocaleString()}
                          </span>
                        </small>
                      </span>
                    </h3>
                  </div>
                  <div
                    className="col-md-6 text-md-right"
                    id="unduh-bukti-parent"
                  >
                    <button
                      type="button"
                      className="btn btn-primary offer-nav"
                      onClick={handleDownload}
                    >
                      Unduh Bukti&nbsp;&nbsp;
                      <i className="fa fa-download" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-3">
                    <label htmlFor="cf-1">Jenis mobil</label>
                    <select
                      id="cf-1"
                      className="form-control"
                      name="jenismobil"
                      value={jenismobil}
                      onChange={(e) => setJenisMobil(e.target.value)}
                    >
                      <option value="avanza">Avanza</option>
                      <option value="agya">Agya</option>
                      <option value="raize">Raize</option>
                    </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="cf-2">Wilayah</label>
                    <select
                      id="cf-2"
                      className="form-control"
                      name="fasilitas"
                      value={tujuan}
                      onChange={(e) => setTujuan(e.target.value)}
                    >
                      <option value="hanyajabodetabek">
                        Hanya JaBoDeTaBek
                      </option>
                      <option value="luarjabodetabek">Luar JaBoDeTaBek</option>
                    </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="cf-3">Tanggal mulai</label>
                    <input
                      type="date"
                      id="cf-3"
                      className="form-control px-3"
                      name="tanggalmulai"
                      value={tanggalMulai}
                      onChange={(e) => setTanggalMulai(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="cf-4">Tanggal kembali</label>
                    <input
                      type="date"
                      id="cf-4"
                      className="form-control px-3"
                      name="tanggalkembali"
                      value={tanggalKembali}
                      onChange={(e) => setTanggalKembali(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <span className="keterangan-biaya">
                      <h5>
                        <span className="font-weight-bold text-uppercase">
                          Anda dapat menghitung total biaya disini! Untuk
                          ketersediaan mobil, nego harga dan waktu, serta info
                          selengkapnya, silahkan hubungi kami.{" "}
                        </span>
                      </h5>
                    </span>
                  </div>
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
                  <span className="fa fa-star" />
                </span>
                <div className="service-1-contents">
                  <h3>Rating 5/5 di Google</h3>
                  <p>
                    40+ ulasan positif dari pelanggan yang menggunakan layanan
                    kami
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-1">
                <span className="service-1-icon">
                  <span className="fa fa-users" />
                </span>
                <div className="service-1-contents">
                  <h3>100+ Pelanggan Puas</h3>
                  <p>
                    Telah dipercaya berbagai kalangan sejak mulai beroperasi
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-1">
                <span className="service-1-icon">
                  <span className="fa fa-dollar" />
                </span>
                <div className="service-1-contents">
                  <h3>Harga Terjangkau</h3>
                  <p>Harga yang kami berikan mulai dari Rp350k saja</p>
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
                  <p>Operasional tanpa henti siap melayani kebutuhan Anda</p>
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
                  <p>Mobil yang kami sewakan tentunya bersih dan terawat</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service-1">
                <span className="service-1-icon">
                  <span className="fa fa-credit-card" />
                </span>
                <div className="service-1-contents">
                  <h3>Pembayaran Fleksibel</h3>
                  <p>Transaksi aman via transfer bank, e-wallet, atau tunai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Kebijakan />
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
              <form onSubmit={handleSubmit}>
                <div class="form-group row">
                  <div class="col-md-6 mb-4 mb-lg-0">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nama"
                      name="nama"
                      onChange={(e) => setNama(e.target.value)}
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nomor Telepon"
                      name="nomortelepon"
                      onChange={(e) => setNomorTelepon(e.target.value)}
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
                      onChange={(e) => setEmail(e.target.value)}
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
                      required
                      onChange={(e) => setPesan(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12 mr-auto">
                    <button
                      type="submit"
                      className="btn btn-block btn-primary text-white py-3 px-5"
                    >
                      Kirim Pesan
                    </button>
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
                    <span>0821-2468-8813 (Rental Mobil City Park)</span>
                    <br />
                    <span>0813-1883-3544 (Afri)</span>
                  </li>
                  <li class="d-block mb-3">
                    <span class="d-block text-black">Email:</span>
                    <span>cityparkcarrental@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 mb-5 mt-5">
              <iframe
                title="Rental Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9995262181833!2d106.73414637486658!3d-6.1307642938560205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1ddadd0519c1%3A0x2de7dcf2c02aa834!2sRental%20Mobil%20City%20Park!5e0!3m2!1sen!2sid!4v1738031996273!5m2!1sen!2sid"
                width="100%"
                height="650"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
