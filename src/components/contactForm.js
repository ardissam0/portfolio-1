import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: 'Name', email: 'email@example.com' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
  	<form className="test-mailing">
    	<div>
        <label style ={{display: 'flex', marginLeft: '7px',}}>
            Name: 
            <input 
            type="text" 
            name="Name"
            placeholder="Name" 
            required
            style={{marginBottom: '7px', marginRight: '7px', marginLeft: '7px', width: '90%'}}/>
        </label>
        <label style ={{display: 'flex', marginLeft: '7px',}}>
            Email: 
            <input 
            type="text" 
            name='email@example.com' 
            placeholder="Email" 
            required
            style={{marginBottom: '7px', marginRight: '7px', marginLeft: '7px', width: '90%'}}/>
            
        </label>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleChange}
        	placeholder="Message here"
        	required
        	value={this.state.feedback}
            style={{width: '96.5%', height: '40vh', border: '3px solid white', borderRadius: '6px', margin: 'auto'}}
      	/>
    	</div>
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
  	</form>
	)
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit(event) {
    const templateId = 'template_id';
	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Email was unable to send!:', err))
  }
}

export default ContactForm;