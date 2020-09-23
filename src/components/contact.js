import React, { Component } from 'react';
import { Layout, Content, Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import ContactForm from './contactForm';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
          <Grid className="contact-grid">
            <Layout>
              <Content>
                <Cell col={6}>
                <h2>Samuel Ardis</h2>
                  <p style={{ width: '95%', margin: 'auto', }}> Have a question or want to work together?</p>
                <div className="contact-list">
                <h2>Contact Me</h2>
                  <hr/>
                <ContactForm/>
                  </div>
                </Cell>
              </Content>
            </Layout>
          </Grid>
      </div>
    )
  }
}

export default Contact;