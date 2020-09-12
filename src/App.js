import React, { Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import logo from './img/logocanva1.png';


class App extends Component {

render() {

  function changeColor(e) {
    e.target.style.border = '3px solid white';
    e.target.style.backgroundColor = 'white';
    e.target.style.color = 'black';
    e.target.style.fontWeight = "bold";
  }
  
  function changeColorBack(e) {
    e.target.style.border = 'none';
    e.target.style.backgroundColor = 'black';
    e.target.style.color = 'white';
    e.target.style.fontWeight = 'lighter';
  }

    return (

      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" 
                    style ={{backgroundColor: 'black',}} 
                    title={<Link 
                    style={{textDecoration: 'none', color: 'white', letterSpacing: '.2em',}} 
                    to="/">
                    <img
                    src={logo}
                    alt="logo"
                    className="logo-img"
                    />
                    </Link>} scroll>
                <Navigation>

                <Link onMouseOver={changeColor}
                onMouseLeave={changeColorBack}
                style= {{color: 'white', letterSpacing: '.5em' }} to="/resume">RESUME</Link>
                <Link onMouseOver={changeColor}
                onMouseLeave={changeColorBack}
                style= {{color: 'white', letterSpacing: '.5em' }} to="/aboutme">ABOUT</Link>
                <Link onMouseOver={changeColor}
                onMouseLeave={changeColorBack}
                style= {{color: 'white', letterSpacing: '.5em' }} to="/projects">PROJECTS</Link>
                <Link onMouseOver={changeColor}
                onMouseLeave={changeColorBack}
                style= {{color: 'white', letterSpacing: '.5em' }} to="/contact">CONTACT</Link>

                </Navigation>
            </Header>
            <Drawer style ={{backgroundColor: 'black'}} 
                    title={<Link 
                    style={{textDecoration: 'none', color: 'white', lettSpacing: '.2em'}} 
                    to="/">
                    <img
                    src={logo}
                    alt="logo"
                    className="logo-img"
                    />
                    </Link>}>
                <Navigation>
                  
                <Link onMouseOver={changeColor}
                onMouseLeave={changeColorBack}
                style= {{color: 'white', letterSpacing: '.5em' }} to="/resume">RESUME</Link>
                <Link onMouseOver={changeColor}
                onMouseLeave={changeColorBack}
                style= {{color: 'white', letterSpacing: '.5em' }} to="/aboutme">ABOUT</Link>
                <Link onMouseOver={changeColor}
                onMouseLeave={changeColorBack}
                style= {{color: 'white', letterSpacing: '.5em' }} to="/projects">PROJECTS</Link>
                <Link onMouseOver={changeColor}
                onMouseLeave={changeColorBack}
                style= {{color: 'white', letterSpacing: '.5em' }} to="/contact">CONTACT</Link>
                  
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content"/>
                <Main/>
            </Content>
        </Layout>
</div>

    );
  }
}
export default App;

