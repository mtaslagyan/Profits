import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import addclientImg from '../../images/addClient.png'
import addsessionImg from '../../images/addsession.png'
import analyzeImg from '../../images/analyze.png'


class Banner extends Component{ 

  
  render() {
    return (
      <div className="banner">
      <div className="bannerIntro">
        <h1 className="text-black bannerIntro1">Easily track your weekly income with <span className="bannerProfits">Profit<span className="dollarSign">$</span></span>.</h1>
        <h2 className="text-black bannerIntro2">Visual diagrams and calculations will analyze where your profit is coming from.</h2>
      </div>
        {/* <h3 className="pt-5">3 Easy Steps</h3> */}
        <div className="container steps">
          <div className="row pt-5">
            <div className="col-12 col-md-3 step_1 mb-5 mb-md-0">
              <div>Step 1</div>
              
              <img className="addclientImg" src={addclientImg} alt=""/>
              <div className="step-titles">Add Clients</div> 
            </div>
            <div className="col-12 col-md-3 step_2 my-5 my-md-0">
              <div>Step 2</div>
              <img className="addsessionImg" src={addsessionImg} alt=""/>
              <div className="step-titles">Add Sessions</div>
            </div>
            <div className="col-12 col-md-3 step_3 my-5 my-md-0">
              <div>Step 3</div>
              <img className="analyzeImg" src={analyzeImg} alt=""/>
              <div className="step-titles">Analyze Income</div>
            </div>
            <div className="col-12 col-md-3 mt-5">
              <Link to="/clients"><button className="startNowBtn btn">Start Now</button></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
