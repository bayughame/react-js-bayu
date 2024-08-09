import React from "react";
import assets from "../assets";

export default function Footer() {
  return (
    <footer className='footer'>
        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-3">
              <div className="mb-3">Jalan Suroyo No. 161 Mayangan Kota <br />Probolonggo 672000</div>
              <div className="mb-3">binarcarrental@gmail.com</div>
              <div className="mb-3">081-233-334-808</div>
            </div>
            <div className="col-3">
              <div className="mb-3">Our Service</div>
              <div className="mb-3">Why Us</div>
              <div className="mb-3">Testimonial</div>
              <div className="mb-3">FAQ</div>
            </div>
            <div className="col-3">
              <div className="mb-3">Connect With Us</div>
              <img className="mx-1" src={assets.fb} alt="fb" />
              <img className="mx-1" src={assets.ig} alt="ig" />
              <img className="mx-1" src={assets.twt} alt="twt" />
              <img className="mx-1" src={assets.mail} alt="mail" />
              <img className="mx-1" src={assets.twich} alt="fct" />
            </div>
            <div className="col-3">
              <div>Copyright Binar 2022</div>
            </div>
          </div>
        </div>
      </footer>
  )
}
