import React, { Component } from 'react';
import { Grid, Cell, Footer, FooterSection, FooterLinkList, Layout, Content } from 'react-mdl';
import img from '../img/NewProfPic.png';


class LandingPage extends Component {

  render() {

    return(
      <Layout>
        <Content>
          <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
              <Cell col={12}>

                <div className="banner-text">
                        <img
                        src={img}
                        alt="avatar"
                        className="avatar-img"
                        />
                        <h1>WEB DEVELOPER</h1>

                        <hr/>

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

                <Footer size="mini" style={{backgroundColor: 'white', marginTop: '120px', marginBottom: '20px', justifyContent: 'center'}}>
                    <FooterSection type="left" >
                        <FooterLinkList style={{textAlign: 'center'}}>
                        <footer>&copy; Copyright {(new Date().getFullYear())} <a href="https://samardis.com/">samardis.com</a></footer>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>

              </Cell>
            </Grid>
          </div>
        </Content>
      </Layout>
    )
  }
}

export default LandingPage;