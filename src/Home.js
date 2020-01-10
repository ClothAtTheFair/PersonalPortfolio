import React, { Component } from "react";
import { MDBIcon, MDBBtn } from 'mdbreact';

class Home extends Component {
    render() {
        return (
            <div>
                <h1 className = "landingTitle">Hello, I'm Bradley</h1>
                <p className = "description">I have a degree in Mechanical Engineering and I'm on a journey to become a software engineer</p>
              
              <div className = "socialMedia" aria-label="socialButtons">
                <MDBBtn href="https://twitter.com/BradleyFairclo2"size="lg" floating social="tw" >
                    <MDBIcon fab icon = "twitter" />                 
                </MDBBtn>

                <MDBBtn href="https://github.com/ClothAtTheFair" size="lg" floating social="git">
                    <MDBIcon fab icon="github"/>
                </MDBBtn>
                
                <MDBBtn href="https://www.linkedin.com/in/bradley-faircloth-576a74a3/" size="lg" floating social="li">
                    <MDBIcon fab icon="linkedin-in"/>
                </MDBBtn>

                <MDBBtn href="#" size="lg" floating social="yt">
                    <MDBIcon fab icon="youtube" />
                </MDBBtn>

                <MDBBtn emailto="bradleycodes@gmail.com" size="lg" tag="a" floating social="email">
                    <MDBIcon icon = "envelope" />
                </MDBBtn>

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