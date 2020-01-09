import React, { Component } from "react";
import {Collapse, CardBody, Card} from 'reactstrap'



class Projects extends Component {  
    constructor(props){
        super(props);
        this.state = {isToggleOn: false};

        //binding needed to make 'this' work in callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }         
    
      
    render() {
        
        return (
            <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <h1>Projects I am working on</h1>    

            <div className="grid-container">

                <div className="grid-item" aria-label="devwebsite" onClick={this.handleClick}>
                        {this.state.isToggleOn ? 'ON': 'OFF'}
                        <div className = "information">
                           <img src = { require('./static/images/test.png')} alt = "website project" />
                            <h4>ReactJS Developer Portfolio</h4>
                            <p>Started at the beginning of 2020</p>
                        </div>                        
                </div>

                <div className="grid-item" aria-label="visioncam">
                        <div className = "information">
                           <img src = { require('./static/images/test.png')} alt = "website project" />
                            <h4>Object Detection Dashcam</h4>
                            <p> Starting in Feb. 2020</p>
                        </div>
                </div>

                <div className="grid-item" aria-label="clojurescheduler">
                        <div className = "information">
                           <img src = { require('./static/images/test.png')} alt = "website project" />
                            <h4>Clojure Scheduler</h4>
                            <p>coool</p>
                        </div>                        
                </div>

                <div className="grid-item">
                    <div className="devewebsite" aria-label="devewebsitecard">
                        <div className = "information">
                           <img src = { require('./static/images/test.png')} alt = "website project" />
                            <h4>Test</h4>
                            <p>coooooooooooooooooooooooool</p>
                        </div>
                    </div>
                </div>

                
            </div>          
        </div>
        );
    }    
}


export default Projects;


