import React from "react";
import { Helmet } from "react-helmet";

function Kebijakan() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="Kebijakan.css" />
      </Helmet>
      <div className="container mt-5 mb-5" id="kebijakan">
        <div className="card">
          <div className="card-header bg-primary text-white text-white-custom">
            <h4>Kebijakan Rental Mobil City Park</h4>
          </div>
          <div className="card-body">
            <p>
              Sebelum Anda menyewa mobil penting untuk memahami aturan sewa
              mobil agar tidak terjadi hal yang kurang menyenangkan di kemudian
              hari. Berikut ini merupakan aturan sewa mobil yang berlaku pada
              layanan sewa mobil kami:
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Bagi penyewa wajib memiliki SIM A
              </li>
              <li className="list-group-item">
                Penyewa wajib memberikan nomor rekening
              </li>
              <li className="list-group-item">
                Penyewa wajib memberikan KTP dan Kartu Keluarga (Fotokopi)
              </li>
              <li className="list-group-item">
                KTP yang diberikan akan disimpan oleh kami selama masa penyewaan
              </li>
              <li className="list-group-item">
                Adanya denda sesuai dengan ketentuan jika penyewa melebihi batas
                waktu sewa
              </li>
              <li className="list-group-item">
                Adanya denda sesuai ketentuan jika terjadi pelanggaran aturan
                wilayah pemakaian kendaraan sesuai perjanjian
              </li>
              <li className="list-group-item">
                Adanya denda sesuai ketentuan jika terjadi kerusakan ringan atau
                kerusakan berat
              </li>
              <li className="list-group-item">
                Durasi penyewaan dianggap digunakan secara full dan tidak bisa
                dipotong untuk digunakan di lain waktu
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Kebijakan;
