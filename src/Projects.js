import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';



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
              
                <Accordion>  
                    <Card className = "yikes" aria-label="devwebsite" >                      
                        <div className="projectCard">                               
                            <Accordion.Toggle eventKey="0">
                                <img src = { require('./static/images/test.png')} alt = "website project" />
                                <h4>ReactJS Developer Portfolio</h4>
                            </Accordion.Toggle>
                            
                            <Accordion.Collapse eventKey="0">
                                <p>Started at the beginning of 2020, I set out to create a portfolio I would be proud of. <br/>
                                I also wanted to learn a new framework so I chose React.JS with the idea of making it single page applicaton.<br/>
                                While learning a new framework, I am learning to test the code with the React Test Library, Jest, and Enzyme. <br/>
                                The project will hopefully showcase my talents as a new Full-Stack developer as well as my williness to learn UI/UX design. <br/>
                                The project will be documented on <a href="https://amazing-babbage-a08cab.netlify.com/">my blog</a> which is a gatsby framework <br/>
                                and on my youtube channel (when that is created).</p>                          
                            </Accordion.Collapse>
                        </div>                               
                    </Card>
                </Accordion>  

                <Accordion>  
                    <Card  className = "yikes" aria-label="visioncam" >                      
                        <div className="projectCard">                             
                            <Accordion.Toggle eventKey="0">
                                <img src = { require('./static/images/test.png')} alt = "vision project" />
                                <h4>Object Detection Dashcam</h4>
                            </Accordion.Toggle>
                            
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Starting in Feb. 2020, I hope to start this project <br/>
                                The idea is to create an object Detection dashcam, with a 3D printed case that can record and save videos <br/>
                                One goal of the project is to find out the distance from the car's bumper to objects such as cars and walls when parking. </Card.Body>                          
                            </Accordion.Collapse>
                        </div>                               
                    </Card>
                </Accordion>  

                <Accordion>  
                    <Card className = "yikes"  aria-label="clojurescheduler" >                      
                        <div className="projectCard">                                
                            <Accordion.Toggle eventKey="0">
                                <img src = { require('./static/images/test.png')} alt = "schedule project" />
                                <h4>Clojure Scheduler</h4>
                            </Accordion.Toggle>
                            
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Starting in Feb. 2020, I hope to start this project <br/>
                                Since December 2019 I have started slowly learning Clojure through coding websites and documentation but I didn't have anything <br/>
                                at work I could use the language on. After listening to a talk by the creator Rich Hickey, I decided I would create my own scheduler in clojure. <br/>
                                The scheduler should be able to help me schedule appointments as well as remind me of appointments or tasks I tell it about. <br/>
                                Integration with Google calendars is the goal. </Card.Body>                          
                            </Accordion.Collapse>
                        </div>                               
                    </Card>
                </Accordion>  
                
                <Accordion>  
                    <Card  className = "yikes" aria-label="Jarvis 2.0" >                      
                        <div className="projectCard">                               
                            <Accordion.Toggle eventKey="0">
                                <img src = { require('./static/images/test.png')} alt = "jarvis project" />
                                <h4>Jarvis 2.0</h4>
                            </Accordion.Toggle>
                            
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Starting in March 2020, I hope to do this thing </Card.Body>                          
                            </Accordion.Collapse>
                        </div>                               
                    </Card>
                </Accordion>  
               

                <div className="grid-item" onClick = {this.handleClick}>
                    {this.state.isToggleOn ? 'ON': 'OFF'}
                        <div className = "information">
                           <img src = { require('./static/images/test.png')} alt = "website project" />
                            <h4>Object Detection Dashcam</h4>
                            <p> Starting in Feb. 2020</p>
                        </div>
                </div>

            </div>          
        </div>
        );
    }    
}


export default Projects;


