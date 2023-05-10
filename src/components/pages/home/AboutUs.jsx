import React, { Component } from 'react'
import imgMoney from '../../../assets/img/money.svg'
import imgRobo from '../../../assets/img/robo.svg'
import imgLesson from '../../../assets/img/lesson.svg'
import imgCS from '../../../assets/img/CS.svg'


export default class AboutUs extends Component {
  render() {
    const cardStyle = {
        width:'36rem'
    }
    return (
    <>
        <hr className="solid"/>
        <section id="aboutus" className="d-flex align-items-center ">
            <div className="container col-xxl-8 px-4 py-3">
                <div className="section-title">
                    <h2>Keunggulan Investasi di Aplikasi Invest</h2>
                </div>
                <div className="row">
                    <div className="card col m-3">
                        <div className="card-body">
                            <div className="row m-3">
                                <div className="col-5">
                                    <img src={imgMoney} alt="logoMoney" className="d-inline-block card-img-top"/>
                                </div>
                                <div className="col-7 textCard py-4">
                                    <h5 className="card-title">Mulai dari 10 ribu</h5>
                                    <p className="card-text">Pembelian saham atau kripto bisa dilakukan mulai dari 10 ribu saja</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card col m-3">
                        <div className="card-body">
                            <div className="row m-3">
                                <div className="col-5">
                                    <img src={imgRobo} alt="logoRobo" className="d-inline-block card-img-top"/>
                                </div>
                                <div className="col-7 textCard py-3">
                                    <h5 className="card-title">Teknologi Robo Task</h5>
                                    <p className="card-text">Dilengkapi teknologi robo task untuk mempermudah Anda membeli / menjual aset dengan kondisi tertentu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="card col m-3">
                        <div className="card-body">
                            <div className="row m-3">
                                <div className="col-5">
                                    <img src={imgLesson} alt="logoLesson" className="d-inline-block card-img-top"/>
                                </div>
                                <div className="col-7 textCard py-3">
                                    <h5 className="card-title">Edukasi dan Berita</h5>
                                    <p className="card-text">Tersedia berbagai artikel berita dan edukasi seputar investasi, serta free webinar tiap minggunya</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card col m-3">
                        <div className="card-body">
                            <div className="row m-3">
                                <div className="col-5">
                                    <img src={imgCS} alt="logoCS" className="d-inline-block card-img-top"/>
                                </div>
                                <div className="col-7 textCard py-4">
                                    <h5 className="card-title">Customer Service 24/7</h5>
                                    <p className="card-text">Jangan khawatir, customer service siap melayani Anda 24/7 melalui live chat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
  }
}
