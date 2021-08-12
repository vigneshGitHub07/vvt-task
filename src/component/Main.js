import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom';
 class Main extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            title : props.title,
            head : props.head,

        })
      }
    render() {
        return (
            <div>
                        <div className="row backgroundClr">
        <div className="row pt-3">
          <div className="col-md-2">
          <Link to="/">  <p className="blueclr"><span className="greenclr">Un</span>academy</p></Link>
          </div>
          <div className="col-md-2">
          <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <span className="mx-5">{this.state.head}</span>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/Engineering" > Engineering</Dropdown.Item>
    <Dropdown.Item href="/Medical">Medical</Dropdown.Item>
    <Dropdown.Item href="/Archi"> Architecture</Dropdown.Item>
    <Dropdown.Item href="/Dental"> Dental</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
          </div>
        </div>
        <div className="content row ">
        <div className=" col-md-6">
            <button className="newAnthem">LISTEN TO OUR NEW ANTHEM</button>
            <h1> {this.state.title}</h1>
            <h4 className="pt-4">Get Plus subscription and access unlimited live and recorded courses from India's best educators</h4>
            <button className="subsctipionbtn mt-5">Get Subscription</button>
         
          </div>
        </div>
         
        </div>
            </div>
        )
    }
}
export default Main