import React, { Component } from 'react'
import Banner from './Banner'
import bannerImg2 from '../../images/bannerImg3.jpg'

class Home extends Component {
  render() {
    return (
      <div className="home">
      <img className="bannerImg" src={bannerImg2} alt=""/>
        <div className="container">
          <div className="row text-center">
            <div className="col-12">             
              <Banner/>
            </div>       
          </div>
        </div>
      </div>
    )
  }
}

export default Home
