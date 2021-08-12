import React, { Component } from 'react'
import Main from './Main'
import Float from './Float/Float'
import Footer from './Footer';

 class Archi extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            title : " Crack Architecture with India's largest learning platform",
            head : "Architecture",
            courseHead: "Architecture"

        })
      }

    render() {
        return (
            <div className="container-fluid">
                < Main title={this.state.title} head ={this.state.head} />
                <div className="row">
                    < Float courseHead={this.state.courseHead}/>
                </div>
                <div className="pt-5 childfooter">
                <button className="paybutton">Pay fee for {this.state.courseHead} Course & Start Excercies </button>
                    < Footer />
                </div>
            </div>
        )
    }
}
export default Archi;