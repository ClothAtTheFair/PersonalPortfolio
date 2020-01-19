import React, { Component } from "react";
import axios from 'axios';

//Back end still needs to be implemented
const API_PATH = 'http://localhost:3000/personal_spa/src/send_form_email.php';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            mailSent: false,
            error: null
        }
    }

    handleSubmit(e){
        e.preventDefault();
        axios({
            method: 'post', 
            url: `${API_PATH}`,
            headers: {'content-type': 'application/json'},
            data: this.state
        })
        .then(result => {
            this.setState({
                mailSent: result.data.sent 
            })
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    render() {
        return (
            <div>
                <h2 className="contactTitle">Let's Chat!</h2>
                <div className="col-sm-4 offset-sm-4">
                <form name="contactform" id="contact-form" action= "#">
                    <div className = "form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" className="form-control"  value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
                    </div>
                    <div className = "form-group">
                        <label htmlFor="email">Email</label>
                        <input type = "email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
                    </div>
                    <div className = "form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={e => this.setState({message: e.target.value})}/>
                    </div>

                    <input type="submit" className="btn btn-primary" onClick={e => this.handleSubmit(e)} value="Submit"></input>

                    <div>
                        { this.state.mailSent && 
                        <div> Thank you for contacting me. </div>
                        }
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

export default Contact;