import React, { Component } from 'react'
import image1 from '../image/app.png'
import image2 from '../image/google.png'
 class Mobile extends Component {
    render() {
        return (
            <div>
                        <div className="row mobiles mt-5 pt-5">
            <div className="col-md-5 my-auto">
<h2>Get the learning app</h2>
<p>Download lessons and learn anytime, anywhere with the Unacademy app</p>
<span><img src={image1} alt="app" /> <img src={image2} alt="app" /></span>

            </div>
            <div className="col-md-7">
              <img src="https://unacademy.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fstatic%2Fimages%2Fphones.c939f085a01852721d53490a918a7827.png&w=384&q=75" />
            </div>
          </div> 
            </div>
        )
    }
}
export default Mobile;