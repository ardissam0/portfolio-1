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
          <h4 style={{ width: '95%', margin: 'auto',}}> I am a Full Stack Web Developer from Michigan, United States. </h4>
          <br/>
          <p style={{ width: '95%', margin: 'auto',}}> I enjoy creating websites from wireframes. I also love the logic behind coding and always strive for clean, efficient code. When I'm not coding or increasing my knowledge of code, you can find me out in nature, traveling, or reading random articles.</p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;