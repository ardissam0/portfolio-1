import React, { Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';
import logo from './img/logocanva1.png';


class App extends Component {

render() {

  function changeColor(e) {
    e.target.style.backgroundColor = 'white';
    e.target.style.color = 'black';
    e.target.style.fontWeight = "bold";
    e.target.style.textDecoration = "none";
  }
  
  function changeColorBack(e) {
    e.target.style.backgroundColor = 'black';
    e.target.style.color = 'white';
    e.target.style.fontWeight = 'lighter';
  }

    return (

      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" 
                    style ={{backgroundColor: 'black'}} 
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
            <Footer size="mini" style={{backgroundColor: 'black', justifyContent: 'center', alignItems: 'center',}}>
                <FooterSection type="left" >
                    <FooterLinkList>
                      <Link style= {{color: 'white', letterSpacing: '.5em',}} to="/"> HOME</Link>
                      <Link style= {{color: 'white', letterSpacing: '.5em' }} to="/resume">RESUME</Link>
                      <Link style= {{color: 'white', letterSpacing: '.5em' }} to="/aboutme">ABOUT</Link>
                      <Link style= {{color: 'white', letterSpacing: '.5em' }} to="/projects">PROJECTS</Link>
                      <Link style= {{color: 'white', letterSpacing: '.5em' }} to="/contact">CONTACT</Link>
                    </FooterLinkList>

                    <FooterLinkList>
                    <div className="social-links-footer">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/samuel-ardis/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/ardissam0" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Twitter */}
                <a href="https://twitter.com/samuel_ardis" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/samuel.d.ardis/?hl=en" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-instagram" aria-hidden="true" />
                </a>
                
                </div>
                <footer className="footer__app">&copy; Copyright {(new Date().getFullYear())} <a href="https://samardis.com/">samardis.com</a></footer>
                </FooterLinkList>
                </FooterSection>
            </Footer>
        </Layout>
</div>

    );
  }
}
export default App;

