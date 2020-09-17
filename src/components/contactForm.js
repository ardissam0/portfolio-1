import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('ardis_productions_gmail_com', 'template_of7oXN4X', e.target, 'user_JP3KJFruQIUasNlOMfyEB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name:</label>
      <input type="text" name="user_name" />
      <label>Email:</label>
      <input type="email" name="user_email" />
      <label>Message:</label>
      <textarea name="message" />
      <input className="btn-contact-form"  type="submit" value="Send" />
    </form>
  );
}



// import React, { Component } from 'react'
// import * as emailjs from 'emailjs-com'

// import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'


// class ContactForm extends Component {
//   state = {
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   }

// handleSubmit(e) {
//     e.preventDefault()
//     const { name, email, subject, message } = this.state

//     let templateParams = {
//       from_name: email,
//       to_name: 'ardis_productions_gmail_com',
//       subject: subject,
//       message_html: message,
//      }
//      emailjs.send(
//       'gmail',
//       'template_of7oXN4X',
//        templateParams,
//       'user_JP3KJFruQIUasNlOMfyEB'
//      )
//      this.resetForm()
//  }
// resetForm() {
//     this.setState({
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//     })
//   }
// handleChange = (param, e) => {
//     this.setState({ [param]: e.target.value })
//   }
// render() {
//     return (
//       <>
//         <div>
//           <Form onSubmit={this.handleSubmit.bind(this)}>
//             <FormGroup controlId="formBasicEmail">
//               <Label className="text-muted">Email address</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 value={this.state.email}
//                 className="text-primary"
//                 onChange={this.handleChange.bind(this, 'email')}
//                 placeholder="Enter email"
//               />
//             </FormGroup>
// <FormGroup controlId="formBasicName">
//               <Label className="text-muted">Name</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 value={this.state.name}
//                 className="text-primary"
//                 onChange={this.handleChange.bind(this, 'name')}
//                 placeholder="Name"
//               />
//             </FormGroup>
// <FormGroup controlId="formBasicSubject">
//               <Label className="text-muted">Subject</Label>
//               <Input
//                 type="text"
//                 name="subject"
//                 className="text-primary"
//                 value={this.state.subject}
//                 onChange={this.handleChange.bind(this, 'subject')}
//                 placeholder="Subject"
//               />
//             </FormGroup>
// <FormGroup controlId="formBasicMessage">
//               <Label className="text-muted">Message</Label>
//               <Input
//                 type="textarea"
//                 name="message"
//                 className="text-primary"
//                 value={this.state.message}
//                 onChange={this.handleChange.bind(this, 'message')}
//               />
//             </FormGroup>
// <Button style = {{background: 'black', color: 'white'}} id="btn btn--submit">
//               Submit
//             </Button>
//           </Form>
//         </div>
//       </>
//     )
//   }
// }
// export default ContactForm;