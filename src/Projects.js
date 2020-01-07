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
                <h2>Projects I'm working on</h2>
               
               <div className="devwebsite" aria-label="devwebsitecard">
                   <div className="flip-card-inner" onClick={console.log("add a route to a new page later, I'm tired now")}>
                       <div className="flip-card-front">
                           <h1>Test</h1>
                       </div>
                        <div className="flip-card-back">
                            <h2>Test1</h2>
                            <p>ahhhh</p>
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
