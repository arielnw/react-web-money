import React, {Component} from 'react'
import Navbar from '../components/navbar'
import Home from '../components/pages/home'
import AOS from 'aos'
import Footer from '../components/footer';
import '../assets/global.css'

AOS.init();

export default class HomeLayout extends Component {
    render() {
        return(
            <>
                <Navbar/>
                <Home/>
                <Footer/>
            </>
        )
    }
}