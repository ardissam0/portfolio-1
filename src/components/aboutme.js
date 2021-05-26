import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText } from 'react-mdl';
import DogImg from '../img/theo-img.png';


class About extends Component {
  render() {
    return(
      <div className= "about-page-main">
        <Grid className="contact-grid">
          <Cell col={6}>
            <div className="about-me_div">
              <h2>About Me</h2>
              <hr/>
              <br/>
              <h5 style={{ width: '95%', margin: 'auto',}}> Hi, you can call me Sam. I am a Web Developer from Michigan.</h5>
              <br/>
              <p style={{ width: '95%', margin: 'auto',}}> I enjoy every step of the software development process from ideation and design to development, testing, and publishing. I love the logic behind coding as well as the creative elements.</p>
              <br/>
              <p style={{ width: '95%', margin: 'auto',}}>When I'm not coding, you can find me gaming, writing books, reading random articles, and hanging with my dog.</p>
              <br/>
              <br/>

              <div className="theo-card-div"> 
                <Card shadow={5} className="proj-cards" style={{margin: 'auto', borderRadius: '7px', paddingBottom: '8px', width: '257px'}}>
                  <CardTitle>
                    <img 
                    src={DogImg}
                    alt="My dog"
                    className="about-img-theo"/>
                  </CardTitle>
                  <CardText style = {{color: 'black', textAlign: 'center', fontWeight: 'bold'}}> My dog, Theo.</CardText>
                </Card>
              </div>   
              
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;