import React, { Component } from 'react'
import imgHero from '../../../assets/img/heroImage.svg'
import imgGooglePlay from '../../../assets/img/googlePlay.png'
import imgAppStore from '../../../assets/img/appStore.png'


export default class Hero extends Component {
  render() {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container col-xxl-8 px-4 py-3">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={imgHero} className="d-block mx-lg-auto img-fluid" alt="" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                        <div className="lc-block mb-3">
                            <div editable="rich">
                                <h2 className="fw-bold display-5">Investasi saham dan kripto hanya dari satu aplikasi</h2>
                            </div>
                        </div>

                        <div className="lc-block mb-3">
                            <div editable="rich">
                                <p className="lead"> Minimum transaksi mulai dari 10 ribu saja
                                </p>
                            </div>
                        </div>

                        <div className="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
                            <a href="#">
                                <img src={imgGooglePlay} alt="logoGooglePlay" className="d-inline-block" height="56"/>
                            </a>
                            <a href="#">
                                <img src={imgAppStore} alt="logoAppStore" className="d-inline-block" height="58"/>
                            </a>
                        </div>

                    </div>
                </div>
                </div>
      </section>
    )
  }
}
