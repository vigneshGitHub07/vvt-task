import React, { Component } from 'react'
import '../Float/Float.css'

class Float extends Component {
  constructor (props, context) {
    super(props, context)
     
    this.state = {
      value: 1,  
      dollarvalue: 4.99,
      courseHead: "Engineering"
    }
  }

  handleChange = (e) => {
    this.setState({
      value:e.target.value,
    })
  }
  render () {
    const { value, dollarvalue } = this.state

    return (
      <div className="container-fluid simple-pricing">
<div className="row ">
<p className="head">{this.props.courseHead} Course's Pricing  </p>
</div>
  <div class="input-group mx-auto">
  
  <input type="text" class="form-control" placeholder="Your work email..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <span class="input-group-text" id="basic-addon2">Get Started Free</span>
  <p className="info pt-2 mx-auto"> Free forever version with Unimited User. Free 14-day trial to test Premium </p>
<button className="infobtn mx-auto"> FREE Asana & Jira Migration! Transfer everything in seconds!</button>
</div>
<div className="row cards">
  <div className="col-md-2 card1">
    <h4>Free</h4>
    <p className="symbole pt-3">$ <span className="dollarvalue my-auto">0</span></p>
    <p className="gray">per user/month</p>
    <p>Unlimited<span className="gray">User</span></p>
    <p>Basic<span className="gray"> Permission</span></p>
    <hr className="mx-auto  "></hr>
    <p>100 MB<span className="gray">Total Storage</span></p>

  </div>
  <div className="col-md-2 card2">
    <h4>Premium</h4>
    <p className="symbole pt-3">$ <span className="dollarvalue my-auto">4</span>.99</p>
    <p className="gray">per user/month</p>
    <div className="row">
<div className="col-md-4">
  <p className="gray">Monthly</p>
</div>
    <div class="col-md-4 pl-3 form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
</div>
<div className="col-md-4">
  <p className="blue">Yearly</p>
</div>
    </div>
    
    <p>Free Guest<span className="gray">User</span></p>
    <hr className="mx-auto  "></hr>
    <p>Advanced<span className="gray"> Permission</span></p>
    <hr className="mx-auto  "></hr>
    <p>+10 BG<span className="gray"> Storage Per User</span></p>
    <hr className="mx-auto  "></hr>
    <p>Priority<span className="gray"> Support</span></p>
  </div>
  <div className="col-md-3 card3">
<h4 className="card4heading"> Calculate how much you spen</h4>
<div className="row values pt-5">
<div className="col-md-6">
  <p className="val">{value}</p>
  <hr></hr>
  <p className="small"># of users</p>
</div>
<div className="col-md-6">
  <p className="val">$ {(dollarvalue * value).toFixed(2)}</p>
  <p className="small pt-3">Per month(billed Yearly)</p>
</div>
</div>

<div class="slidecontainer">
<input type="range" class="form-range" id="customRange1" min={1}
          max={200}
          step="1"
          value={value}
          onChange={this.handleChange}/>
</div>
<div className="row range">
  <div className="col-md-2">
    <p>1</p>
  </div>
  <div className="col-md-2">
    <p>200+</p>
  </div>
</div>
  </div>
</div>
</div>

    )
  }
}

export default Float