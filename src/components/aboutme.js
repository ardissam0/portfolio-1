import React, { Component } from 'react';
import { Grid, Cell, } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div className= "about-page-main">
        <Grid className="contact-grid">
          <Cell col={6}>
          <h2>About Me</h2>
          <hr/>
          <br/>
          <h4 style={{ width: '95%', margin: 'auto',}}> I am a Front-End Web Developer from Michigan, United States. </h4>
          <br/>
          <p style={{ width: '95%', margin: 'auto',}}> I enjoy designing and building applications. I love the logic behind coding and always strive for clean, efficient code. When I'm not coding, you can find me with my family, traveling, gaming, or researching cool stuff.</p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;