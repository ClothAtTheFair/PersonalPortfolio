import React, { Component } from "react";
import emailjs from 'emailjs-com';


class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            mailSent: false,
            error: null
        };
        this.handleSubmit = this. handleSubmit.bind(this);
    }

    //contact form uses EmailJS for service but would be nice to change to nodemailer or express in the future
    handleSubmit(e){
        alert('Thank you for submitting ' + this.state.name);
        e.preventDefault();
        // axios({
        //      method: 'post', 
        //      url: `${API_PATH}`,
        //      headers: {'content-type': 'application/json'},
        //      data: this.stateonSubmit={this.handleSubmit} 
        //  })
        //  .then(result => {
        //      this.setState({
        //          mailSent: result.data.sent 
        //      })
        //  })
        //  .catch(error => this.setState({
        //      error: error.message
        //  }));

        const templateId = 'contact_form';
        this.sendContact(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email})
    }

    sendContact(templateId, variables){
        emailjs.send(
            'gmail', templateId,
            variables, 'user_bQjBTOrDMauwMVVNm81tZ'
        ).then(res => {
            console.log('Email sent!')
        })
        .catch(err => console.error('oops', err))
    }

    render() {
        return (
            <div>

                <h2 className="contactTitle">Let's Chat!</h2>
                <div className="col-sm-4 offset-sm-4">
                <form className="contactform" id="contact-form" onSubmit={this.handleSubmit}>
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

                    <input type="submit" className="btn btn-primary" id="conSubmit" value="Submit" aria-label="submit_button" />

                </form>
                </div>
            </div>
        );
    }
}

export default Contact;