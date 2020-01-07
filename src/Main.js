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
import Better from "./Better";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>Iteration 1</h1>
                <ul className = "header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/better">Better?</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/comingsoon">Coming Soon</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component = {Home} />
                    <Route path="/projects" component = {Projects} />
                    <Route path = "/better" component = {Better} />
                    <Route path="/contact" component = {Contact} />
                    <Route path="/comingsoon" component = {Dprojects} />
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;