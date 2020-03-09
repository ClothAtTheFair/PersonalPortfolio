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
                <h1 className="projectsTitle">Portfolio</h1>
                <h4 className="projectdescription">Between helping mentor a FRC programming team and working full time, I am working on these projects at night
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
                            <Card className="yikes" aria-label="discord" >
                                <div className="projectCard">
                                    <Accordion.Toggle eventKey="0">
                                        <img src={require('./static/images/test.png')} alt="jarvis project" />
                                        <h4>Discord Chatbot</h4>
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>After talking to one of the students I mentor about the chatbots I made previously and how fun they were, he mentioned some of the students
                                            and alumni of the team had a discord and I could have access to add in bots. <br /> What ensued was a fun little chatbot which had no purpose other than
                                            to entertain. The first bot asks like a self-checkout machine with items which were randomly pulled into lists. This code can be found on <a href="https://repl.it/@ClothAtTheFair/bagBoi" target="_blank"
                                            rel="noopener noreferrer">repl.it here</a> <br />
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </div>
                            </Card>
                        </Accordion>

                        <Accordion>
                            <Card className="yikes" aria-label="firebaseTodo" >
                                <div className="projectCard">
                                    <Accordion.Toggle eventKey="0">
                                        <img src={require('./static/images/todo_application.png')} alt="todo project" />
                                        <h4>Redux/Firebase ToDo Web Application</h4>
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Talking to a mentor of mine, it was brought up that if I wanted to learn a lot about ReactJS and use it well
                                            learning how to use Redux would be the next step. At the same time I am really forgetful, which leads to some less than ideal
                                            situations. <br /> So after searching the internet I found a way to start a ToDo application with Redux using Firebase as the 
                                            database. Before being posted publically authorization needs to be added so only those authorized can add or remove tasks and not overload the database. <br />
                                            <a href="https://github.com/ClothAtTheFair/Firebase_ToDo" target="_blank" rel="noopener noreferrer" ><i className="fab fa-github"></i></a>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </div>
                            </Card>
                        </Accordion>

                        <Accordion>
                            <Card className="yikes" aria-label="firebaseVue" >
                                <div className="projectCard">
                                    <Accordion.Toggle eventKey="0">
                                        <img src={require('./static/images/vuejs_logo.png')} alt="login page with vue and firebase" />
                                        <h4>Firebase Authorization with Vue.js</h4>
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body> 
                                            This project has given me the opportunity to learn both the differences between Vue.js and React.js but also the basics of firebase authorization. <br />
                                            After doing the Firebase Todo web application, I noticed firebase has an option for authorization. The webpage can be found <a href="https://okayvue-44dbe.web.app/" target="_blank"
                                            rel="noopener noreferrer">here</a> 
                                             <br /> Researching, I found a tutorial on firebase authorization with Vue.js which would 
                                            allow me learn about authorization and Vue.js at the same time.
                                            <a href="https://github.com/ClothAtTheFair/VueLogin" target="_blank" rel="noopener noreferrer" ><i className="fab fa-github"></i></a>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </div>
                            </Card>
                        </Accordion>

                        <Accordion>
                            <Card className="yikes" aria-label="codepens" >
                                <div className="projectCard">
                                    <Accordion.Toggle eventKey="0">
                                        <img src={require('./static/images/codepen.png')} alt="UI designs" />
                                        <h4>Various Codpens </h4>
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            Using codepen.io, I have explored different UI components in smaller scale for rapid testing and learning. These projects can be found <a href="https://codepen.io/clothatthefair" target="_blank"
                                            rel="noopener noreferrer">here</a>
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
                                        <Card.Body>Project will be started mid March, links will be provided then.<br />
                                            The idea is to create an object Detection dashcam, with a 3D printed case that can record and save videos <br />
                                            One goal of the project is to find out the distance from the car's front bumper to objects such as cars and walls when parking. </Card.Body>
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
                                        <Card.Body>Project will be started mid April 2020, links will be provided then.<br />
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


                    <h5 className="apologise">If you are seeing this I'm sorry for the inconvience. There is a bug in iOS with react bootstrap which isn't
                            common. I am working to fix it very soon.
                        </h5>
                
            
            </div>


        );
    }
}


export default Projects;


