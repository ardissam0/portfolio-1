import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import ContactForm from './contactForm';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
          <h2>Samuel Ardis</h2>
             <p style={{ width: '95%', margin: 'auto', }}> Have a question or want to work together?</p>
          <div className="contact-list">
          <h2>Contact Me</h2>
            <hr/>
            <br/>
          <ContactForm/>
              <List style={{ color: 'ghostwhite', backgroundColor: '#327580'}}>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: 'ghostwhite', backgroundColor: '#327580'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (517) 240-2202
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: 'ghostwhite', backgroundColor: '#327580'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    ardis.productions@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: 'ghostwhite', backgroundColor: '#327580'}}>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;