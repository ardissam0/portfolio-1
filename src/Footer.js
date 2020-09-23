import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Footer, FooterSection, FooterLinkList} from 'react-mdl';

function FooterPage() {
    return (
        <div>
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
        </div>
    )
}

export default FooterPage;
