import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import NasaImg from '../img/NasaSnip.png';
import GithubApiProjImg from '../img/githubapiproj.JPG';
import RickMortyImg from '../img/rickandmortyfanimg.JPG';
import MiracleMessagesImg from '../img/miraclemessagessnip.JPG';
import TodoAppImg from '../img/todoappimg.JPG';
import CarSalesImg from '../img/carsalesimg.JPG';
import ShopCartImg from '../img/shoppingcartimg.JPG';
import NewsfeedImg from '../img/newsfeedimg.JPG';
import TodoFirebaseImg from '../img/todofirebaseimg.JPG';

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
                    src={MiracleMessagesImg}
                    alt="Mirracle messages labs project"
                    style={{height: '100%', width: '100%'}}
                    /></CardTitle>
            <CardText style = {{ color: 'white', overflowY: 'auto'}}>
              Worked with a team of developers to build a web app for a nonprofit organization called Miracle Messages. We worked directly with the CEO to build out a map with pins, lines, and pop up modals as well as tiered authorization structure for dashboards and functionality using Okta. This was all to show connections between homeless people who have been reconnected with friends and family and to help organize the process for the CEO and others working at the organization.
            </CardText>
            <CardText style = {{ color: 'white',}}> STACK: React, JavaScript, Sass.</CardText>
            <CardText></CardText>
            <CardText></CardText>
            <CardActions border className='btn-proj-div'>
              <button className ='btn-proj'><a href="https://miracle-messages-fe-dgknhsijz.vercel.app/" rel="noopener noreferrer" target="_blank">Deployed</a></button>
              <button className ='btn-proj'><a href="https://github.com/Lambda-School-Labs/miracle-messages-fe" rel="noopener noreferrer" target="_blank">Github</a></button>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} className="proj-cards" style={{ margin: 'auto', background: 'black', borderRadius: '7px', marginBottom: '25px', height: '500px',}}>
            <CardTitle>
                    <img
                    src={NasaImg}
                    alt="Nasa Project"
                    style={{height: '100%', width: '100%'}}
                    /></CardTitle>
            <CardText style = {{ color: 'white', overflowY: 'auto'}}>
              I built a photo of the day app that uses NASA's API for an image, title, and explanation that updates daily. I also added a simple animation and made it mobile friendly.
            </CardText>
            <CardText style = {{ color: 'white',}}> STACK: React, JavaScript, and CSS.</CardText>
            <CardText></CardText>
            <CardText></CardText>
            <CardActions border className='btn-proj-div'>
              <button className ='btn-proj'><a href="https://nasa-photo-of-the-day-fq1quvy7u.vercel.app/" rel="noopener noreferrer" target="_blank">Deployed</a></button>
              <button className ='btn-proj'><a href="https://github.com/ardissam0/nasa-photo-of-the-day" rel="noopener noreferrer" target="_blank">Github</a></button>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} className="proj-cards" style={{ margin: 'auto', background: 'black', borderRadius: '7px', marginBottom: '25px', height: '500px',}}>
            <CardTitle>
                    <img
                    src={TodoFirebaseImg}
                    alt="Todo app proj"
                    style={{height: '100%', width: '100%'}}
                    /></CardTitle>
            <CardText style = {{ color: 'white', overflowY: 'auto'}}>
              I built a mobile-friendly TODO App where you can add items to your todo list and update/delete as needed using firebase as backend/host.
            </CardText>
            <CardText style = {{ color: 'white',}}> STACK: React, JavaScript, and SASS.</CardText>
            <CardText></CardText>
            <CardText></CardText>
            <CardActions border className='btn-proj-div'>
              <button className ='btn-proj'><a href="https://todo-list-app-a1b10.web.app/" rel="noopener noreferrer" target="_blank">Deployed</a></button>
              <button className ='btn-proj'><a href="https://github.com/ardissam0/todo-list-app" rel="noopener noreferrer" target="_blank">Github</a></button>
            </CardActions>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} className="proj-cards" style={{ margin: 'auto', background: 'black', borderRadius: '7px', marginBottom: '25px', height: '500px',}}>
            <CardTitle>
                    <img
                    src={TodoAppImg}
                    alt="Todo app proj"
                    style={{height: '100%', width: '100%'}}
                    /></CardTitle>
            <CardText style = {{ color: 'white', overflowY: 'auto'}}>
              I built a simple mobile friendly todo app where you can add your daily todo's and delete by clicking on your todo and clicking the clear button.
            </CardText>
            <CardText style = {{ color: 'white',}}> STACK: React, Redux, JavaScript, and CSS.</CardText>
            <CardText></CardText>
            <CardText></CardText>
            <CardActions border className='btn-proj-div'>
              <button className ='btn-proj'><a href="https://todo-app-1.vercel.app/" rel="noopener noreferrer" target="_blank">Deployed</a></button>
              <button className ='btn-proj'><a href="https://github.com/ardissam0/todo-app-1" rel="noopener noreferrer" target="_blank">Github</a></button>
            </CardActions>
          </Card>

          {/* Project 5 */}
          <Card shadow={5} className="proj-cards" style={{ margin: 'auto', background: 'black', borderRadius: '7px', marginBottom: '25px', height: '500px',}}>
            <CardTitle>
                    <img
                    src={CarSalesImg}
                    alt="Car sales proj"
                    style={{height: '100%', width: '100%'}}
                    /></CardTitle>
            <CardText style = {{ color: 'white', overflowY: 'auto'}}>
              I built a mobile friendly web app where you can add and delete different features on a Ford Mustang and the total price will be added up for you.
            </CardText>
            <CardText style = {{ color: 'white',}}> STACK: React, Redux, JavaScript, and Sass.</CardText>
            <CardText></CardText>
            <CardText></CardText>
            <CardActions border className='btn-proj-div'>
              <button className ='btn-proj'><a href="https://car-sales-ten.now.sh/" rel="noopener noreferrer" target="_blank">Deployed</a></button>
              <button className ='btn-proj'><a href="https://github.com/ardissam0/Car-Sales" rel="noopener noreferrer" target="_blank">Github</a></button>
            </CardActions>
          </Card>

            {/* Project 6 */}
            <Card shadow={5} className="proj-cards" style={{ margin: 'auto', background: 'black', borderRadius: '7px', marginBottom: '25px', height: '500px',}}>
            <CardTitle>
                    <img
                    src={ShopCartImg}
                    alt="Car sales proj"
                    style={{height: '100%', width: '100%'}}
                    /></CardTitle>
            <CardText style = {{ color: 'white', overflowY: 'auto'}}>
              I built a mobile friendly web app where you can add products and remove them from the cart, as well as get the total cost. 
            </CardText>
            <CardText style = {{ color: 'white',}}> STACK: React, JavaScript, and Sass.</CardText>
            <CardText></CardText>
            <CardText></CardText>
            <CardActions border className='btn-proj-div'>
              <button className ='btn-proj'><a href="https://react-shopping-cart-gules.vercel.app/" rel="noopener noreferrer" target="_blank">Deployed</a></button>
              <button className ='btn-proj'><a href="https://github.com/ardissam0/react-shopping-cart" rel="noopener noreferrer" target="_blank">Github</a></button>
            </CardActions>
          </Card>

          {/* Project 7 */}
          <Card shadow={5} className="proj-cards" style={{ margin: 'auto', background: 'black', borderRadius: '7px', marginBottom: '25px', height: '500px',}}>
            <CardTitle>
                    <img
                    src={RickMortyImg}
                    alt="Rick and Morty proj"
                    style={{height: '100%', width: '100%'}}
                    /></CardTitle>
            <CardText style = {{ color: 'white', overflowY: 'auto'}}>
              This was a 3 hour timed sprint challenge where I had to build a Rick and Morty fan page that pulled from an API and had character search functionality. Once I completed it, I made it mobile friendly as well.
            </CardText>
            <CardText style = {{ color: 'white',}}> STACK: React, JavaScript, and CSS.</CardText>
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
        <div className="projects-grid">          
          {/* Project 1 */}
        <Card shadow={5} className="proj-cards" style={{ margin: 'auto', background: 'black', borderRadius: '7px', marginBottom: '25px', height: '500px',}}>
          <CardTitle>
                  <img
                  src={GithubApiProjImg}
                  alt="Github Api Proj"
                  style={{height: '100%', width: '100%'}}
                  /></CardTitle>
          <CardText style = {{ color: 'white', overflowY: 'auto'}}>
            I built a mobile friendly app that pulls data form my github and displays me and my followers data on cards.
          </CardText>
          <CardText style = {{ color: 'white',}}> STACK: JavaScript, HTML, and CSS.</CardText>
          <CardText></CardText>
          <CardText></CardText>
          <CardActions border className='btn-proj-div'>
            <button className ='btn-proj'><a href="https://github-usercard-coral.vercel.app/" rel="noopener noreferrer" target="_blank">Deployed</a></button>
            <button className ='btn-proj'><a href="https://github.com/ardissam0/github-usercard/tree/Samuel-Ardis" rel="noopener noreferrer" target="_blank">Github</a></button>
          </CardActions>
        </Card> 

        {/* Project 2 */}
        <Card shadow={5} className="proj-cards" style={{ margin: 'auto', background: 'black', borderRadius: '7px', marginBottom: '25px', height: '500px',}}>
          <CardTitle>
                  <img
                  src={NewsfeedImg}
                  alt="Github Api Proj"
                  style={{height: '100%', width: '100%'}}
                  /></CardTitle>
          <CardText style = {{ color: 'white', overflowY: 'auto'}}>
            I built a website that displays a mock newsfeed that you can click and expand to read and click again to close, as well as a mock sidebar navigation. NOTE: This site is not mobile friendly. 
          </CardText>
          <CardText style = {{ color: 'white',}}> STACK: JavaScript, HTML, and CSS.</CardText>
          <CardText></CardText>
          <CardText></CardText>
          <CardActions border className='btn-proj-div'>
            <button className ='btn-proj'><a href="https://admiring-kare-d1f60b.netlify.app/" rel="noopener noreferrer" target="_blank">Deployed</a></button>
            <button className ='btn-proj'><a href="https://github.com/ardissam0/Newsfeed-Components" rel="noopener noreferrer" target="_blank">Github</a></button>
          </CardActions>
        </Card> 
        </div>
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
          <Tab style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>React</Tab>
          <Tab style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>JavaScript</Tab>
          <Tab style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>Node</Tab>
          <Tab style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>Python</Tab>
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
