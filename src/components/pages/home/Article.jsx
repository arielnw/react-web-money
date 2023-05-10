import React, { Component } from 'react'
import imgArticle1 from '../../../assets/img/artikel1.jpg'
import imgArticle2 from '../../../assets/img/artikel2.jpeg'
import imgArticle3 from '../../../assets/img/artikel3.jpg'

export default class Article extends Component {
  render() {

    const articles = [
        {title:"Kerap Menjadi Acuan Investor, Apa yang Perlu Diperhatikan dalam Laporan Keuangan?", imgUrl:imgArticle1, updated:"1 jam yang lalu", alt:"img", type:"EDUKASI"},
        {title:"Harga Ethereum Melemah 7.18% dalam Sepekan", imgUrl:imgArticle2, updated:"2 jam yang lalu", alt:"img", type:"BERITA"},
        {title:"Hari Ini Saham BBCA Resmi Diperdagangkan dengan Harga Baru", imgUrl:imgArticle3, updated:"3 jam yang lalu", alt:"img", type:"BERITA"},
    ]
    
    return (
    <>
        <hr className="solid"/>
        <section id="article" className="d-flex align-items-center ">
            <div className="container col-xxl-8 px-4 py-3">
                <div className="section-title">
                    <h2>Artikel Untuk Anda</h2>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {articles.map((article) => (
                    <div className="col">
                        <div className="card h-100">
                        <img src={article.imgUrl} className="card-img-top" alt={article.alt}/>
                        <div className="card-body">
                        <p class="type">{article.type}</p>
                            <h5 className="card-title">{article.title}</h5>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">{article.updated}</small>
                        </div>
                        </div>
                    </div>
                ))}
                    </div>
                    <div className="col-xl-12">
                        <div className="d-flex  mt-4">
                            <div className="ms-auto align-right">         
                                <a href="#">
                                <span>Lihat Semua Artikel</span>  <svg className="svg-right-arrow fs-3 text" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
        </section>
    </>
    )
  }
}
