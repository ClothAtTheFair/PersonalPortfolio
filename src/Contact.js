import React, { Component } from "react";
import axios from 'axios';

//Back end still needs to be implemented

class Contact extends Component {

    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url:"http://localhost:3000/send",
            data: {
                name: name,
                email: email,
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.msg === 'fail'){
                alert("Whoops, it looks like it didn't send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render() {
        return (
            <div>
                <h2 className="contactTitle">Got Questions?</h2>
                <p>yeah, me too</p>
                <div className="col-sm-4 offset-sm-4">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method = "POST">
                    <div className = "form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" className="form-control" />
                    </div>
                    <div className = "form-group">
                        <label htmlFor="email">Email</label>
                        <input type = "email" className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className = "form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" id="message" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit!</button>
                </form>
                </div>
            </div>
        );
    }
}

export default Contact;