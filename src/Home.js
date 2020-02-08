import React, { Component } from "react";
import { ReactTerminal } from "react-terminal";

class Home extends Component { 
    constructor(props){
        super(props);
            this.state = {pagerClicked: false};
        

        this.handleClick = this.handleClick.bind(this);
    }

    newQoutes(){
        //still need to figure out how to make this random for the session not just every new session
        var qoutes = [
            'Mess with the best, die like the rest.',
            'Hack the Planet',
            'Never send a boy to do a woman\'s job.',
            'Never fear, I is here',
            'There is no right or wrong, just fun and boring.'
        ]

        var randomNum = Math.floor(Math.random() * (qoutes.length));
        return qoutes[randomNum];
    }

    handleClick() {
        this.setState(state => ({
            pagerClicked: !state.pagerClicked,
            ReactTerminal: new ReactTerminal()
        }));
    }

  
    render() {

        const commands = {
            whoami: "Zero Cool",
            help: "This is a small easter egg based on the movie hackers. whoami gives your hacker name and typing hack gives a movie quote",
            hack: this.newQoutes(),
            ahh: "Yikes Forever",
        }
    
        return (
            <div className="grid-container-1">
                <h1 className = "landingTitle">Hello I'm Bradley,</h1>
                <p className = "description">I have a degree in Mechanical Engineering with a strong concentration
                in Computer Science. I am on a journey to become a great software engineer
                focused on user centered design.</p>

                <div className ="socialMedia" aria-label="socialButtons">
                <a href="https://twitter.com/BradleyFairclo2"><i className="fab fa-twitter"></i></a>
                <a href="https://github.com/ClothAtTheFair" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/bradley-faircloth-576a74a3/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-linkedin"></i></a>
                <a href="https://amazing-babbage-a08cab.netlify.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-scroll"></i></a>
                </div>

                <img className="homeImage" src= { require('./static/images/IMG_0037.GIF')} alt= "animated computer" />

         
                <div className="terminal" aria-label="terminalbutton">
                {
                    this.state.pagerClicked?
                    <div  aria-label="terminal" >
                    <ReactTerminal welcomeMessage = "Type help for more information "  theme="dark" prompt="$" commands = {commands} />
                    </div>
                    :
                    <div></div>
                }
                    <a onClick={this.handleClick}><i className="fas fa-terminal"></i></a>
                   
                </div>
            </div>
        );
    }
}

export default Home;