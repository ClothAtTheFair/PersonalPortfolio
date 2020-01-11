import React, { Component } from "react";
import { MDBTooltip, MDBIcon, MDBBtn } from 'mdbreact';

class Home extends Component {
    render() {
        return (
            <div>
                <h1 className = "landingTitle">Hello, I'm Bradley</h1>
                <p className = "description">I have a degree in Mechanical Engineering and I'm on a journey to become a software engineer</p>
              
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
            
            </div>
        );
    }
}

export default Home;