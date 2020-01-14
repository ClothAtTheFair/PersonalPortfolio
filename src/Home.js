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
            pagerClicked: !state.pagerClicked
        }));
    }

  
    render() {

        const commands = {
            whoami: "Zero Cool",
            help: "This is a small easter egg based on the movie hackers. whoami gives your hacker name and typing hack gives a movie quote",
            hack: this.newQoutes(),
            ahh: "Yikes Forever"
        }
    
        return (
            <div>
                <h1 className = "landingTitle">Hello, I'm Bradley</h1>
                <p className = "description">I have a degree in Mechanical Engineering and I'm on a journey to become a great software engineer</p>
              
              <div className = "socialMedia" aria-label="socialButtons">
                  <MDBTooltip placement="top">
                <MDBBtn href="https://twitter.com/BradleyFairclo2" target="_blank" size="lg" floating social="tw" >
                    <MDBIcon fab icon = "twitter" />                 
                </MDBBtn>
                <div>Twitter</div>
                </MDBTooltip>

                <MDBTooltip placement="top">
                <MDBBtn href="https://github.com/ClothAtTheFair" target="_blank" size="lg" floating social="git">
                    <MDBIcon fab icon="github"/>
                </MDBBtn>
                <div>GitHub</div>
                </MDBTooltip>
                
                <MDBTooltip placement="top">
                <MDBBtn href="https://www.linkedin.com/in/bradley-faircloth-576a74a3/" target="_blank" size="lg" floating social="li">
                    <MDBIcon fab icon="linkedin-in"/>
                </MDBBtn>
                <div>Linkedin</div>
                </MDBTooltip>

                <MDBTooltip placement="top">
                <MDBBtn href="https://amazing-babbage-a08cab.netlify.com/" target="_blank" size="lg">
                    <MDBIcon fas icon="blog" />
                </MDBBtn>
                <div>blog</div>
                </MDBTooltip>
              
                <MDBTooltip placement="top">
                <MDBBtn href="#" size="lg" floating social="yt">
                    <MDBIcon fab icon="youtube" />
                </MDBBtn>
                <div>YouTube</div>
                </MDBTooltip>

               {/*  <MDBBtn href="Faircloth_Bradley_Resume3.pdf" size="lg" tag="a" floating social="file-pdf" target = "_blank">
                    <MDBIcon icon = "file-pdf" />
                </MDBBtn>
                 */}
                </div>
                <div className="pager" aria-label="pagerbutton" >
                {
                    this.state.pagerClicked?
                    <div  aria-label="terminal" >
                    <ReactTerminal welcomeMessage = "Type help for more information "  theme="dark" prompt="$" commands = {commands} />
                    </div>
                    :
                    <div></div>
                }
                
                    <MDBBtn size="sm" onClick ={this.handleClick}>
                        <MDBIcon icon="pager" />
                    </MDBBtn>
                </div>
            </div>
        );
    }
}

export default Home;