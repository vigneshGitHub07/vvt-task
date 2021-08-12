import React, { Component } from 'react'
import '../App.css'
import Footer from './Footer'
import Main from './Main'
import Mobile from './Mobile'
import Question from './Question'
 class Home extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            title : " Crack Your Course's with India's largest learning platform",
            head : "Choose your stream's"

        })
      }
    render() {
        return (
            <div className="container-fluid ">
        <div className="row mb-5 gry">
      < Main title={this.state.title} head ={this.state.head}/>
        <div className="row pt-5 contents" id="forbackgrond">
          <div className="col-md-10">
            <button className="introbtn">INTRODUCING</button>
            <h1>ICONIC subscription</h1>
            <p>Take Your IIT JEE Preparation to Next Level with Your Personal Coach</p>
            <div className="row pt-5 contents">
            <div className="col-md-6">
              <div className="row contents">
                <div className="col-md-2">
<img src="https://static.uacdn.net/web-cms/benefitchat_1b0a84e281.svg" />
                </div>
                <div className="col-md-8 details">
                  <h5>Daily Live classes</h5>
                  <h6>Chat with your educator, engage in discussions, ask your doubts, and answer polls - all while the class is going on</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-2">
<img src="https://static.uacdn.net/web-cms/benefittest_d542d8446b.svg" />
                </div>
                <div className="col-md-8 details">
                  <h5>Live tests & quizzes</h5>
                  <h6>Evaluate your preparation with our regular mock tests and quizzes and get detailed analysis on your performance</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-5">
              <div className="row">
                <div className="col-md-2">
<img src="https://static.uacdn.net/web-cms/Live_Doubt_solving_80b01abcbd.svg" />
                </div>
                <div className="col-md-8 details">
                  <h5>Structured courses</h5>
                  <h6>All our courses are structured in line with your exam syllabus to help you best prepare for it</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-5">
              <div className="row">
                <div className="col-md-2">
<img src="https://static.uacdn.net/web-cms/benefitaccess_9a0fb1469f.svg" />
                </div>
                <div className="col-md-8 details">
                  <h5>Unlimited access</h5>
                  <h6>One subscription gets you access to all our live and recorded courses to watch from the comfort of any of your devices</h6>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-5"></hr>
          <div className="row pt-5">
            <div className="col-md-7">
<h3 id="textringht">A Practice Exam subscription start from <span className="blueclr">₹4,167/month</span></h3>
            </div>
            <div className="col-md-4">
              <h5 className="greenclr" id="textleft"> <t>View pricing</t></h5>
            </div>
          </div>
 <Mobile />
        < Question />
          </div>
 
        </div>
      </div>
     < Footer />
      </div>
        )
    }
}
export default Home