import React, { Component } from "react";
import * as THREE from "three";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardAction from '@material-ui/core/CardActions';
import { makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';



class Projects extends Component {  
    constructor(props){
        super(props) 
            this.state = {
                isDesktop: false
            };
            this.updatePredicate = this.updatePredicate.bind(this);
        }
        componentDidMount(){
            this.updatePredicate();
            window.addEventListener("resize", this.updatePredicate);
        }

        componentWillUnmount(){
            window.removeEventListener("resize", this.updatePredicate);
        }

        updatePredicate(){
            this.setState({ isDesktop: window.innerWidth > 900});
        }
      
    render() {
        const isDesktop = this.state.isDesktop;
        return (
            <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <h1>Projects I am working on</h1>    

            <div className="grid-container">

                <div className="grid-item" aria-label="devwebsite">
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

            <div>
                {isDesktop ? (
                    <div> true </div>
                        ) : (
                    <div> false </div>
                    )}
            </div>
           
        </div>
        );
    }    
}


export default Projects;


