import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'

import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'


class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state

    let templateParams = {
      from_name: email,
      to_name: 'ardis_productions_gmail_com',
      subject: subject,
      message_html: message,
     }
     emailjs.send(
      'gmail',
      'template_of7oXN4X',
       templateParams,
      'user_JP3KJFruQIUasNlOMfyEB'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
      <>
        <div>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup>
<FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>
<FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
<Button style = {{background: 'black'}} id="btn btn--submit">
              Submit
            </Button>
          </Form>
        </div>
      </>
    )
  }
}
export default ContactForm;


// /////////////////////////////////////////////////////
// import React from 'react';


// class ContactForm extends React.Component {
//   constructor(props) {
// 	super(props);
// 	this.state = { feedback: '', name: '', email: '' };
// 	this.handleChange = this.handleChange.bind(this);
// 	this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
// 	return (
//   	<form className="test-mailing">
//     	<div>
//         <label style ={{display: 'flex', marginLeft: '7px',}}>
//             Name: 
//             <input 
//             type="text" 
//             name="Name"
//             placeholder="Name" 
//             required
//             style={{marginBottom: '7px', marginRight: '7px', marginLeft: '7px', width: '90%'}}/>
//         </label>
//         <label style ={{display: 'flex', marginLeft: '7px',}}>
//             Email: 
//             <input 
//             type="text" 
//             name='email@example.com' 
//             placeholder="Email" 
//             required
//             style={{marginBottom: '7px', marginRight: '7px', marginLeft: '7px', width: '90%'}}/>
            
//         </label>
//       	<textarea
//         	id="test-mailing"
//         	name="test-mailing"
//         	onChange={this.handleChange}
//         	placeholder="Message here"
//         	required
//         	value={this.state.feedback}
//             style={{width: '96.5%', height: '40vh', border: '3px solid black', borderRadius: '6px', margin: 'auto'}}
//       	/>
//     	</div>
//     	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
//   	</form>
// 	)
//   }

//   handleChange(event) {
//     this.setState({feedback: event.target.value})
//   }

//   handleSubmit(event) {
//     const templateId = 'template_id';
// 	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
//   }

//   sendFeedback (templateId, variables) {
// 	window.emailjs.send(
//   	'gmail', templateId,
//   	variables
//   	).then(res => {
//     	console.log('Email successfully sent!')
//   	})
//   	// Handle errors here however you like, or use a React error boundary
//   	.catch(err => console.error('Email was unable to send!:', err))
//   }
// }

// export default ContactForm;