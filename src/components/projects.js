import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import NasaImg from '../img/NasaSnip.png';
import RickMortyImg from '../img/rickandmortyfanimg.JPG';
import MiracleMessagesImg from '../img/miraclemessagessnip.JPG';
import TodoFirebaseImg from '../img/todofirebaseimg.JPG';
import CovidTrackAppImg from '../img/covidtrackingappimg - Copy.JPG';
import AnywhereFitnessAppImg from '../img/anywherefitnessimg.JPG';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} className="proj-cards" style={{ margin: 'auto', background: 'black', borderRadius: '7px', marginBottom: '25px', height: '500px',}}>
            <CardTitle>
                    <img
                    src={CovidTrackAppImg}
                    alt="Covi-19 tracker app Project"
                    style={{height: '100%', width: '100%'}}
                    /></CardTitle>
            <CardText style = {{ color: 'white', overflowY: 'auto',}}>
              Built an authenticated mobile-friendly COVID-19 tracker app that shows you the total and new worldwide cases, as well as individual country and state data (cases, recovered, deaths, population, etc). There is a table, map, and graph that you can use to get a good visual of the data. I also implemented a weather tab so you can see the weather of any place in the world as well as a darkmode toggle for better viewing.
            </CardText>
            <CardText style = {{ color: 'white',}}> STACK: React, CSS, Firebase.</CardText>
            <CardText></CardText>
            <CardText></CardText>
            <CardActions border className='btn-proj-div'>
              <button className ='btn-proj'><a href="https://covid-19-tracker-app-d7699.web.app/" rel="noopener noreferrer" target="_blank">Deployed</a></button>
              <button className ='btn-proj'><a href="https://github.com/ardissam0/COVID-19_TRACKER-APP" rel="noopener noreferrer" target="_blank">Github</a></button>
            </CardActions>
          </Card>

          
          {/* Project 2 */}
          <Card shadow={5} className="proj-cards" style={{ margin: 'auto', background: 'black', borderRadius: '7px', marginBottom: '25px', height: '500px',}}>
            <CardTitle>
                    <img
                    src={MiracleMessagesImg}
                    alt="Mirracle messages labs project"
                    style={{height: '100%', width: '100%'}}
                    /></CardTitle>
            <CardText style = {{ color: 'white', overflowY: 'auto',}}>
            Watch the first 15 minutes of this presentation to see an in depth look at the project: <a href="https://youtu.be/Dp1q0x9lQNU" rel="noopener noreferrer" target="_blank">YouTube</a> <br/> <br/> Worked with a team of developers to build a web app for a nonprofit organization called Miracle Messages. We worked directly with the CEO to build out a map with pins, lines, and pop up modals as well as tiered authorization structure for dashboards and functionality using Okta. This was all to show connections between homeless people who have been reconnected with friends and family and to help organize the process for the CEO and others working at the organization.
            </CardText>
            <CardText style = {{ color: 'white',}}> STACK: React, Redux, CSS/SASS.</CardText>
            <CardText></CardText>
            <CardText></CardText>
            <CardActions border className='btn-proj-div'>
              <button className ='btn-proj'><a href="https://miracle-messages-fe-dgknhsijz.vercel.app/" rel="noopener noreferrer" target="_blank">Deployed</a></button>
              <button className ='btn-proj'><a href="https://github.com/Lambda-School-Labs/miracle-messages-fe" rel="noopener noreferrer" target="_blank">Github</a></button>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} className="proj-cards" style={{ margin: 'auto', background: 'black', borderRadius: '7px', marginBottom: '25px', height: '500px',}}>
            <CardTitle>
                    <img
                    src={NasaImg}
                    alt="Nasa Project"
                    style={{height: '100%', width: '100%'}}
                    /></CardTitle>
            <CardText style = {{ color: 'white', overflowY: 'auto',}}>
              Built a photo of the day app that uses NASA's API for an image, title, and explanation that updates daily. I also added a simple animation and made it mobile friendly.
            </CardText>
            <CardText style = {{ color: 'white',}}> STACK: React and CSS.</CardText>
            <CardText></CardText>
            <CardText></CardText>
            <CardActions border className='btn-proj-div'>
              <button className ='btn-proj'><a href="https://nasa-photo-of-the-day-three.vercel.app/" rel="noopener noreferrer" target="_blank">Deployed</a></button>
              <button className ='btn-proj'><a href="https://github.com/ardissam0/nasa-photo-of-the-day" rel="noopener noreferrer" target="_blank">Github</a></button>
            </CardActions>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} className="proj-cards" style={{ margin: 'auto', background: 'black', borderRadius: '7px', marginBottom: '25px', height: '500px',}}>
            <CardTitle>
                    <img
                    src={TodoFirebaseImg}
                    alt="Todo app proj"
                    style={{height: '100%', width: '100%'}}
                    /></CardTitle>
            <CardText style = {{ color: 'white', overflowY: 'auto',}}>
              Built a mobile-friendly TODO App where you can add items to your todo list and update/delete as needed using firebase as backend/host.
            </CardText>
            <CardText style = {{ color: 'white',}}> STACK: React and CSS/SASS.</CardText>
            <CardText></CardText>
            <CardText></CardText>
            <CardActions border className='btn-proj-div'>
              <button className ='btn-proj'><a href="https://todo-list-app-a1b10.web.app/" rel="noopener noreferrer" target="_blank">Deployed</a></button>
              <button className ='btn-proj'><a href="https://github.com/ardissam0/todo-list-app" rel="noopener noreferrer" target="_blank">Github</a></button>
            </CardActions>
          </Card>

          {/* Project 8 */}
          <Card shadow={5} className="proj-cards" style={{ margin: 'auto', background: 'black', borderRadius: '7px', marginBottom: '25px', height: '500px',}}>
            <CardTitle>
                    <img
                    src={RickMortyImg}
                    alt="Rick and Morty proj"
                    style={{height: '100%', width: '100%'}}
                    /></CardTitle>
            <CardText style = {{ color: 'white', overflowY: 'auto',}}>
              This was a 3 hour timed sprint challenge where I had to build a Rick and Morty fan page that pulled from an API and had character search functionality. Once I completed it, I made it mobile friendly as well.
            </CardText>
            <CardText style = {{ color: 'white',}}> STACK: React and CSS.</CardText>
            <CardText></CardText>
            <CardText></CardText>
            <CardActions border className='btn-proj-div'>
              <button className ='btn-proj'><a href="https://sprint-challenge-single-page-apps-ochre.vercel.app/" rel="noopener noreferrer" target="_blank">Deployed</a></button>
              <button className ='btn-proj'><a href="https://github.com/ardissam0/Sprint-Challenge-Single-Page-Apps" rel="noopener noreferrer" target="_blank">Github</a></button>
            </CardActions>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
        {/* Project 1 */}
        <Card shadow={5} className="proj-cards" style={{ margin: 'auto', background: 'black', borderRadius: '7px', marginBottom: '25px', height: '500px',}}>
          <CardTitle>
                  <img
                  src={AnywhereFitnessAppImg}
                  alt="Api for Anywhere Fitness app Proj"
                  style={{height: '100%', width: '100%'}}
                  /></CardTitle>
          <CardText style = {{ color: 'white', overflowY: 'auto',}}>
            Built the backend and deployed the API for a week long group project I did at lambda school called Anywhere Fitness. This app allows you to see what type of classes instrutors are hosting online and when you can attend them. You can login as a client or an instructor, and perform all CRUD operations. I will include the deployed frontend where you can try out the crud operations like registering, logging in, etc. 
          </CardText>
          <CardText style = {{ color: 'white',}}> STACK: Node and Express</CardText>
          <CardText></CardText>
          <CardText></CardText>
          <CardActions border className='btn-proj-div'>
            <button className ='btn-proj'><a href="https://fitness-anywhere-bw.netlify.app/" rel="noopener noreferrer" target="_blank">Deployed</a></button>
            <button className ='btn-proj'><a href="https://github.com/BW-AnywhereFitness/BE" rel="noopener noreferrer" target="_blank">Github</a></button>
          </CardActions>
        </Card> 
        </div>
      )
    }
  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>React</Tab>
          <Tab style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>Node</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
