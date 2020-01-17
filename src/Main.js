import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Dprojects from "./Dprojects";
import { Nav } from "react-bootstrap";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>Iteration 2</h1>
                <Nav variant="pills">
                    <Nav.Item className = "ahh">
                        <NavLink exact to="/">Home</NavLink>
                    </Nav.Item>
                    <Nav.Item className = "ahh">
                    <NavLink to="/projects">Projects</NavLink>
                    </Nav.Item>
                    <Nav.Item className = "ahh">
                    <NavLink to="/contact">Contact</NavLink>
                    </Nav.Item>
                    {/* <li><NavLink to="/comingsoon">Coming Soon</NavLink></li> */}
                </Nav>
                <div className="content">
                    <Route exact path="/" component = {Home} />
                    <Route path="/projects" component = {Projects} />                   
                    <Route path="/contact" component = {Contact} />
                    {/* <Route path="/comingsoon" component = {Dprojects} /> */}
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;