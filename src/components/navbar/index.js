import React, { Component } from 'react'
import imgLogo from '../../assets/img/logo.svg'

export default class Navbar extends Component {
  render() {
    return (
        <header id="header" className="fixed-top bg-navbar-fixed">
        <div className="container  align-items-center">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={imgLogo} alt="Logo" class="d-inline-block align-text-top"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Beranda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutus">Tentang Kami</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#article">Artikel</a>
              </li>
              <li className="nav-item">
                <button class="btn btn-login" type="button">Masuk</button>
              </li>
              <li className="nav-item">
                <button class="btn btn-register" type="button">Daftar</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
      </header>
    )
  }
}
