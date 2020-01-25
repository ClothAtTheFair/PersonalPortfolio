import React, { Component } from "react";
import { MDBTooltip, MDBIcon, MDBBtn } from 'mdbreact';
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
                <h1 className = "landingTitle">Hello, I'm Bradley,</h1>
                <p className = "description">I have a degree in Mechanical Engineering and I'm on a journey to become a great software engineer</p>
                <div className ="socialMedia" aria-label="socialButtons">
                <a href="https://twitter.com/BradleyFairclo2"><i class="fab fa-twitter"></i></a>
                <a href="https://github.com/ClothAtTheFair" target="_blank" ><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/bradley-faircloth-576a74a3/" target="_blank" ><i class="fab fa-linkedin"></i></a>
                <a href="https://amazing-babbage-a08cab.netlify.com/" target="_blank"><i class="fas fa-scroll"></i></a>
                </div>

         
                <div className="terminal" aria-label="terminalbutton">
                {
                    this.state.pagerClicked?
                    <div  aria-label="terminal" >
                    <ReactTerminal welcomeMessage = "Type help for more information "  theme="dark" prompt="$" commands = {commands} />
                    </div>
                    :
                    <div></div>
                }
                    <a onClick={this.handleClick}><i class="fas fa-terminal"></i></a>
                   
                </div>
            </div>
        );
    }
}

export default Home;