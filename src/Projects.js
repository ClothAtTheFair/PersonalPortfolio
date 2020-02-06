import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";



class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };

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
                <h1 className="projectsTitle">Projects I am working on</h1>
                <h4 className="description">Between helping mentor a FRC programming team and working full time, I am working on these projects at night
            and at the weekend to become a better software engineer.</h4>
    
                    <div className="grid-container">

                        <Accordion>
                            <Card className="yikes" aria-label="devwebsite" >
                                <div className="projectCard">
                                    <Accordion.Toggle eventKey="0">
                                        <img className="imageCard" src={require('./static/images/webpage.png')} alt="website project" />
                                        <h4>ReactJS Developer Portfolio</h4>
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0" aria-label="devtext">
                                        <Card.Body>Started at the beginning of 2020, I set out to create a portfolio I would be proud of. <br />
                                            I also wanted to learn a new framework so I chose React.JS with the idea of making it single page applicaton.<br />
                                            While learning a new framework, I am learning to test the code with the React Test Library, Jest, and Enzyme. <br />
                                            The project will hopefully showcase my talents as a new Full-Stack developer as well as my williness to learn UI/UX design. <br />
                                            The project will be documented on my blog which is a gatsby framework,<br />
                                            on my youtube channel (when that is created), and hosted on my github. All of these are linked below. <br />
                                            <a href="https://github.com/ClothAtTheFair/PersonalPortfolio" target="_blank" rel="noopener noreferrer" ><i className="fab fa-github"></i></a>
                                            <a href="https://amazing-babbage-a08cab.netlify.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-scroll"></i></a>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </div>
                            </Card>
                        </Accordion>

                        <Accordion>
                            <Card className="yikes" aria-label="chatBots" >
                                <div className="projectCard">
                                    <Accordion.Toggle eventKey="0">
                                        <img src={require('./static/images/test.png')} alt="chat bot project" />
                                        <h4>Array of Chatbots</h4>
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>This project is really multiple projects, all being chatbots. <br /> Brought about by a recommended Medium article, I set out to create a tutorial rule based chatbot in Python.<br />
                                            After creating the simple rule based chatbot, I realized I could extend this type of bot to finish a project I started in 2015 with a good friend that recently passed away. <br />
                                            The second bot was made, a Theta Tau pledge bot which when done would interview brothers inside of a GUI from pygame and store the information. <br />
                                            While waiting for friends at a Starbucks, a recommended YouTube video came on about a deep learning chatbot by Tech with Tim which brought about the third chatbot.
                                This chatbot will be is used to help talk about myself and my website. <br />
                                            The first link is to the Theta Tau bot and the second link is the deep learning chat bot. <br />
                                            <a href="https://github.com/ClothAtTheFair/ThetaTau_PledgeBot" target="_blank" rel="noopener noreferrer" ><i className="fab fa-github"></i></a>
                                            <a href="https://github.com/ClothAtTheFair/DeepLearningBot" target="_blank" rel="noopener noreferrer" ><i className="fab fa-github"></i></a>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </div>
                            </Card>
                        </Accordion>

                        <Accordion>
                            <Card className="yikes" aria-label="visioncam" >
                                <div className="projectCard">
                                    <Accordion.Toggle eventKey="0">
                                        <img src={require('./static/images/objects.png')} alt="vision project" />
                                        <h4>Object Detection Dashcam</h4>
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Project will be started closer to Feb. 2020, links will be provided then.<br />
                                            The idea is to create an object Detection dashcam, with a 3D printed case that can record and save videos <br />
                                            One goal of the project is to find out the distance from the car's front bumper to objects such as cars and walls when parking. </Card.Body>
                                    </Accordion.Collapse>
                                </div>
                            </Card>
                        </Accordion>

                        <Accordion>
                            <Card className="yikes" aria-label="clojurescheduler" >
                                <div className="projectCard">
                                    <Accordion.Toggle eventKey="0">
                                        <img src={require('./static/images/test.png')} alt="schedule project" />
                                        <h4>Clojure Scheduler</h4>
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Project will be started mid Feb. 2020, links will be provided then.<br />
                                            Since December 2019 I have started slowly learning Clojure through coding websites, books, and documentation but I didn't have anything <br />
                                            at work I could use the language on. After listening to a talk by the creator Rich Hickey, I decided I would create my own scheduler in clojure. <br />
                                            The scheduler should be able to help me schedule appointments as well as remind me of appointments or tasks I tell it about. <br />
                                            Integration with Google calendars is the goal. </Card.Body>
                                    </Accordion.Collapse>
                                </div>
                            </Card>
                        </Accordion>

                        <Accordion>
                            <Card className="yikes" aria-label="Jarvis 2.0" >
                                <div className="projectCard">
                                    <Accordion.Toggle eventKey="0">
                                        <img src={require('./static/images/test.png')} alt="jarvis project" />
                                        <h4>Jarvis 2.0</h4>
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Project will be started mid March 2020, links will be provided then.<br />
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </div>
                            </Card>
                        </Accordion>


                        {/* <div className="grid-item" onClick = {this.handleClick}>
                    {this.state.isToggleOn ? 'ON': 'OFF'}
                        <div className = "information">
                           <img src = { require('./static/images/test.png')} alt = "website project" />
                            <h4>Object Detection Dashcam</h4>
                            <p> Starting in Feb. 2020</p>
                        </div>
                </div> */}

                    </div>
                
            
            </div>


        );
    }
}


export default Projects;


