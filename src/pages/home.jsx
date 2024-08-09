import React from 'react'

import Navigation from '../component/Navigation'
import Hero from '../component/Hero'
import assets from '../assets'
import OurService from '../component/Our-Service'
import WhyUs from '../component/WhyUs'
import Testimonial from '../component/Testimonial'
import CTA_Banner from '../component/CTA_Banner'
import FAQ from '../component/FAQ'
import Footer from '../component/Footer'

export default function home() {
  return (
    <>
      <Navigation />

      <Hero button={<a className="btn btn-success" href="/cari">Mulai Sewa Mobil</a>}/>

      <OurService/>

      <WhyUs/>

      <Testimonial/>

      <CTA_Banner/>

      <FAQ/>

      <Footer/>



    </> 
  )
}
