import React, { Component } from 'react'
import Float from './Float/Float';
import Footer from './Footer';
import Main from './Main'

 class Medical extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            title : " Crack Medical with India's largest learning platform",
            head : "Medical",
            courseHead: "Medical"
        })
      }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                < Main title={this.state.title} head ={this.state.head} />
                </div>
                <div className="row">
                    < Float courseHead= {this.state.courseHead} />
                </div>
                <div className="pt-5 childfooter">
                <button className="paybutton">Pay fee for {this.state.courseHead} Course & Start Excercies </button>
                    < Footer />
                </div>

            </div>
        )
    }
}
export default Medical