import React from 'react'
import assets from '../assets'

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-red">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src={assets.logo} alt="Logo-Tmmin"/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link Testimonial" aria-current="page" href="#">Our Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Why Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Testimonial</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">FAQ</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-success">Register</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
