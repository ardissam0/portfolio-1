import React, { Component } from 'react';
import { Layout, Content, Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import ContactForm from './contactForm';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Layout>
            <Content>
            <Grid className="contact-grid">
              <Cell col={6}>
              <h2>Samuel Ardis</h2>
                <p style={{ width: '95%', margin: 'auto', }}> Have a question or want to work together?</p>
              <div className="contact-list">
              <h2>Contact Me</h2>
                <hr/>
                <br/>
              <ContactForm/>
                  <List style={{ color: 'black',}}>
                    <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: 'black',}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                        (517) 240-2202
                      </ListItemContent>
                    </ListItem>

                    <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: 'black',}}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                        ardis.productions@gmail.com
                      </ListItemContent>
                    </ListItem>

                    <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: 'black',}}>
                      </ListItemContent>
                    </ListItem>
                  </List>
                </div>
              </Cell>
            </Grid>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default Contact;