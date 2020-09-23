import React, { Component } from 'react';
import { Grid, Cell, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import img from '../img/NewProfPic.png';


class LandingPage extends Component {

  render() {

    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>

            <div className="banner-text">
                    <img
                    src={img}
                    alt="avatar"
                    className="avatar-img"
                    />
                    <h1>Full Stack Web Developer</h1>

                    <hr/>

                <p>HTML/CSS | JavaScript | React | NodeJS | Express | SQL | Python</p>

                <div className="social-links">

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

            </div>

            <Footer size="mini" style={{backgroundColor: 'white', marginTop: '150px', justifyContent: 'center'}}>
                <FooterSection type="left" >
                    <FooterLinkList style={{textAlign: 'center'}}>
                    </FooterLinkList>
                    <footer>&copy; Copyright {(new Date().getFullYear())} <a href="https://samardis.com/">samardis.com</a></footer>
                </FooterSection>
            </Footer>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;