import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import NasaImg from '../img/NasaSnip.png';
import GithubApiProjImg from '../img/githubapiproj.JPG'
import MemAddProjImg from '../img/memberaddproj.JPG'

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
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle>
                    <img
                    src={NasaImg}
                    alt="Nasa Project"
                    style={{height: '100%', width: '100%'}}
                    /></CardTitle>
            <CardText>
              Built a NASA photo of the day app that calls NASA's API for a new image, title, and explanation each day.
            </CardText>
            <CardText> STACK: React, JavaScript, and CSS.</CardText>
            <CardActions border>
              <Button colored><a href="https://nasa-photo-of-the-day-fq1quvy7u.vercel.app/" rel="noopener noreferrer" target="_blank">Deployed</a></Button>
              <Button colored><a href="https://github.com/ardissam0/nasa-photo-of-the-day" rel="noopener noreferrer" target="_blank">Github</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle>
                    <img
                    src={MemAddProjImg}
                    alt="Member add proj"
                    style={{height: '100%', width: '100%'}}
                    /></CardTitle>
            <CardText>
              Built a simple app that you can use a form to add team members to the DOM.
            </CardText>
            <CardText> STACK: React, JavaScript, and CSS.</CardText>
            <CardActions border>
              <Button colored><a href="https://team-builder-app-swart.vercel.app/" rel="noopener noreferrer" target="_blank">Deployed</a></Button>
              <Button colored><a href="https://github.com/ardissam0/team-builder/tree/Samuel-Ardis" rel="noopener noreferrer" target="_blank">Github</a></Button>
            </CardActions>
            <CardMenu style={{color: '#00000'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>          
          {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle>
                  <img
                  src={GithubApiProjImg}
                  alt="Github Api Proj"
                  style={{height: '100%', width: '100%'}}
                  /></CardTitle>
          <CardText>
            Built an app that pulls data form my github and displays me and my followers in cards.
          </CardText>
          <CardText> STACK: JavaScript, HTML, and CSS.</CardText>
          <CardActions border>
            <Button colored><a href="https://github-usercard-lbjbk61lu.vercel.app/" rel="noopener noreferrer" target="_blank">Deployed</a></Button>
            <Button colored><a href="https://github.com/ardissam0/github-usercard/tree/Samuel-Ardis" rel="noopener noreferrer" target="_blank">Github</a></Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card> </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div> </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div> </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Node</Tab>
          <Tab>Python</Tab>
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
