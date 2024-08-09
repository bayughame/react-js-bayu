import React from "react";
import assets from "../assets";

export default function Testimonial() {
  return (
    <section id="testimonial">
        <div className="py-5 my-5">
          {/* <!-- untuk testimonial tidak perlu container karena desain item testimoni menempel ke kiri dan kanan  --> */}
          <div className="text-center">
            <h2 className="mb-3">Testimonial</h2>
            <p className="mb-4">Berbagai review positif dari para pelanggan kami</p>
          </div>
          {/* <!-- untuk membuat testimoni berbentuk slider / carousel menggunakan library / plugin lain disini kita akan menggunakan SwiperJs -->
      <!-- referensi : https://swiperjs.com/demos#centered --> */}
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="card bg-red text-light">
                  <div className="card-body py-5">
                    <div className="row align-items-center">
                      <div className="col-12 col-md-3 text-center">
                        <img src={assets.costumer} alt="TMMIN Car Rental - Customer" />
                      </div>
                      <div className="col-12 col-md-9">
                        <img src={assets.rate} alt="TMMIN Car Rental - Rate" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Dicta quisquam eaque autem obcaecati, reprehenderit modi
                          accusamus praesentium ea quam quo a velit temporibus
                          quia delectus ipsam deserunt tenetur suscipit. Sint?
                        </p>
                        <label>John Dee 32, Bromo</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card bg-red text-light">
                  <div className="card-body py-5">
                    <div className="row align-items-center">
                      <div className="col-12 col-md-3 text-center">
                        <img src={assets.costumer1} alt="TMMIN Car Rental - Customer" />
                      </div>
                      <div className="col-12 col-md-9">
                        <img src={assets.rate} alt="TMMIN Car Rental - Rate" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Dicta quisquam eaque autem obcaecati, reprehenderit modi
                          accusamus praesentium ea quam quo a velit temporibus
                          quia delectus ipsam deserunt tenetur suscipit. Sint?
                        </p>
                        <label>John Dee 32, Bromo</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card bg-red text-light">
                  <div className="card-body py-5">
                    <div className="row align-items-center">
                      <div className="col-12 col-md-3 text-center">
                        <img src={assets.costumer} alt="TMMIN Car Rental - Customer" />
                      </div>
                      <div className="col-12 col-md-9">
                        <img src={assets.rate} alt="TMMIN Car Rental - Rate" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Dicta quisquam eaque autem obcaecati, reprehenderit modi
                          accusamus praesentium ea quam quo a velit temporibus
                          quia delectus ipsam deserunt tenetur suscipit. Sint?
                        </p>
                        <label>John Dee 32, Bromo</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card bg-red text-light">
                  <div className="card-body py-5">
                    <div className="row align-items-center">
                      <div className="col-12 col-md-3 text-center">
                        <img src={assets.costumer1} alt="TMMIN Car Rental - Customer" />
                      </div>
                      <div className="col-12 col-md-9">
                        <img src={assets.rate} alt="TMMIN Car Rental - Rate" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Dicta quisquam eaque autem obcaecati, reprehenderit modi
                          accusamus praesentium ea quam quo a velit temporibus
                          quia delectus ipsam deserunt tenetur suscipit. Sint?
                        </p>
                        <label>John Dee 32, Bromo</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- disini kita menggunakan button next prev yang disediakan oleh swiperjs untuk navigasi testimoni -->
        <!-- referensi : https://swiperjs.com/demos#navigation --> */}
            <div className="swiper-navigation">
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </section>
  )
}
