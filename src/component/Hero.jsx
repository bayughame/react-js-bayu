import React from 'react'
import assets from '../assets'


export default function Hero({button=''}) {
  return (
    <section className="bg-red" id="hero">
        <div className="container">
          <div className="row">
            <div className="col d-flex align-items-center text-light">

              <div>
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
                  Selalu
                  siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                {button}
              </div>

            </div>
            <div className="col">
              <div>
                <img src={assets.zenix} className="image-fluid" alt="Zenix" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
