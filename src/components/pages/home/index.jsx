import React, { Component } from 'react'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Article from './Article'

export default class Home extends Component {
  render() {
    return (
      <>
      <Hero/>
      <main id={"main"}>
        <AboutUs/>
        <Article/>
      </main>
      </>
    )
  }
}
