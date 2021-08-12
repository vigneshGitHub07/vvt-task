import React, { Component } from 'react'
import image1 from '../image/app.png'
import image2 from '../image/google.png'
import {FaFacebook , FaInstagram, FaTwitterSquare, FaYoutube, FaLinkedin} from 'react-icons/fa'
export default class Footer extends Component {
    render() {
        return (
            <div>
                 <div className="row  footer">
        <div className="col-md-3 mx-4">
        <h3 className="blueclr"><span className="greenclr">Un</span>academy</h3>
        <span className="my-4" ><FaFacebook/> <FaInstagram/> <FaYoutube /> <FaLinkedin /> <FaTwitterSquare /></span>
        <p className="my-4">© 2021 Sorting Hat Technologies Pvt Ltd</p>
        </div>
        <div className="col-md-2 mx-2">
<h6>COMPANY</h6>
<p>About us</p>
<p>Careers</p>
<p>Blogs</p>
<p>Privacy Policy</p>
<p>Terms and Conditions</p>
        </div>
        <div className="col-md-2 mx-2">
<h6>POPULAR GOALS</h6>
<p>IIT JEE</p>
<p>UPSC CSE GS</p>
<p>SSC Exams</p>
<p>CBSE Class 12</p>
<p>NEET UG</p>
        </div>
        <div className="col-md-2 mx-2">
<h6>OTHER LINKS</h6>
<p>User Guidelines</p>
<p>Site Map</p>
<p>Refund Policy</p>
<p>Legal Notices</p>
<p>Plus subscriptions T&C</p>
        </div>
        <div className="col-md-2">
          <h6>LEARNER APP</h6>
          <span ><img className="footerimage" src={image1} alt="app" /> <img className="footerimage" src={image2} alt="app" /></span>
          <h6 className="pt-4">EDUCATOR APP</h6>
          <span ><img className="footerimage" src={image1} alt="app" /> <img className="footerimage" src={image2} alt="app" /></span>
        </div>
      </div>
            </div>
        )
    }
}

