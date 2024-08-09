import React from "react";
import assets from "../assets";

export default function OurService() {
  return (
    <section id="our-services">
        <div className="container py-5 my-5">
          {/* <!-- container digunakan di setiap section agar tampilan rapi dan konsisten --> */}

          {/* <!-- grid bootstrap menggunakan flex jadi kita bisa mengatur aligment mengunakan align-items dan justify-content --> */}
          <div className="row align-items-center">
            {/* <!-- perilaku col di bawah sama dengan yang di terapkan di hero -->
        <!-- mb adalah className utilitas bootstrap untuk menambahkan margin bottom -->
        <!-- sama dengan col karena kita hanya membutuhkan margin di ukuran layar terkecil sampai 767px -->
        <!-- maka di ukuran layar 768px ke atas kita hapus marginnya dengan menggunakan mb-md-0 --> */}
            <div className="col-12 col-md-6 mb-5 mb-md-0">
              <img src={assets.service} className="img-fluid" alt="TMMIN Car Rental Services" />
            </div>
            <div className="col-12 col-md-6">
              <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
              <p>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ul>
                <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                <li>Sewa Mobil Jangka Panjang Bulanan</li>
                <li>Gratis Antar - Jemput Mobil di Bandara</li>
                <li>Layanan Airport Transfer / Drop In Out</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}
