import React, { Component } from 'react'
import imgLogo from '../../assets/img/logo.svg'
import { Instagram, Twitter, Facebook, Youtube, Email } from '../../assets/img/index'

export default class Footer extends Component {
  render() {
    const socialMedia = [
        {imgUrl:Email, link:"", alt:"Email"},
        {imgUrl:Instagram, link:"", alt:"Instagram"},
        {imgUrl:Twitter, link:"", alt:"Twitter"},
        {imgUrl:Facebook, link:"",alt:"Facebook"},
        {imgUrl:Youtube, link:"",alt:"Youtube"},
    ]
    return (
        <footer id="footer">

        <div className="footer-top">
          <div className="container">
            <div className="row">
                <div className="footer-app">
                    <img src={imgLogo} alt="Logo" class="d-inline-block"/>
                </div>
            </div>
            <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
                <h4>Produk</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Saham</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Kripto</a></li>                </ul>
              </div>
      
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Artikel</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Tips & Trik Investasi</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Berita</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Akademi</a></li>         
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Legal</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Syarat dan Ketentuan</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Kebijakan Privasi</a></li>       
                </ul>
              </div>
      
              <div className="col-lg-3 col-md-6 footer-links ">
                <h4>Social Media</h4>
               <ul className="list-unstyled d-flex justify-content-between ">
                
                {socialMedia.map((socmed) => (
                    <div className="socmed-logo">
                    <li >
                        <img src={socmed.imgUrl} alt={socmed.alt} srcSet={socmed.link}/>
                    </li>
                    </div>
                ))}
               </ul>
              </div>
            </div>
          </div>
        </div>
          <div className="justify-content-center text-light">
            <div className="d-flex align-items-center">
              <div className="mx-auto my-4">
                &copy; Copyright <strong><span>Invest</span></strong>. All Rights Reserved
              </div>
            </div>
          </div>
      </footer>
    )
  }
}
