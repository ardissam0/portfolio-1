import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
// import Experience from './experience';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            </div>
            <h2 style={{paddingTop: '2em'}}>Samuel Ardis </h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid black', width: '50%'}}/>
            <p>I am a Web Developer with 1 year of experience structuring, developing and implementing interactive websites and applications. Able to complete projects efficiently and satisfy customers with attractive, user-friendly applications.</p>
            <hr style={{borderTop: '3px solid black', width: '50%'}}/>
            <h5>Location</h5>
            <p>Lansing, MI</p>
            <h5>Phone</h5>
            <p>(517) 240 - 2202</p>
            <h5>Email</h5>
            <p>ardis.productions@gmail.com</p>
            <h5>Web</h5>
            <p>samardis.com</p>
            <hr style={{borderTop: '3px solid white', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <div className="resume-embed">
            <iframe src="https://drive.google.com/file/d/1n2UJrTlV9PeVzDokKNdScBn7Opsh655G/preview" frameborder="0" border="0" cellspacing="0" scrolling="no" width="100%" height="360px" ></iframe>
            </div>
        
            <h2>Education</h2>

            <Education
                 startYear={2019}
                 endYear={2020}
                 schoolName="Lambda School (Full-Stack Web Development & computer science program)"

                 schoolDescription1="Completed 9+ months of intensive computer science and software engineering training that provides an immersive hands-on curriculum."
                 schoolDescription2="Approached many coding challenges using pair programming."
                 schoolDescription3="Utilized agile software development and Git workflow on all projects."
                 schoolDescription4="Gained hands-on experience with client and server testing."
                 schoolDescription5="Designed original user experiences across a range of web and mobile platforms, from ideation, to wireframing, to final product"
                 schoolDescription6="Completed all curriculum course work including: React, Redux, Node, Express, Jest, Python, etc."
                 schoolDescription7="Wrote production-ready code using ReactJS, Redux, and CSS on the frontend and NodeJS and Express on the backend to build single-page applications." />

            <Education
              startYear={2014}
              endYear={2018}
              schoolName="Grand Valley State University"

              schoolDescription2="Completed courses in multiple disciplines including: Statistics, Business, Technical Writing, Psychology, Sociology, Diversity, Biology, Geology, Nutrition, Linguistics, Arabic, Creative writing, and more."
              schoolDescription3="Studied abroad for 5 weeks in the middle east (Oman and Dubai), with a small group of students and gain a world perspective that changed me forever."
              schoolDescription4="Worked hands-on with many different groups of students to complete various projects and presentations."
              schoolDescription5="Also developed many individual projects in various disciplines, giving me unique perspectives from different fields of study."
              schoolDescription6="Reached the deans list (3.5+ GPA) during my time at GVSU."
              schoolDescription7="I took time off to pursue personal education, and that's when I found Lambda School."
              />
                  
                {/* <hr style={{borderTop: '3px solid white'}} /> */}

              {/* <h2>Experience</h2> */}

            {/* <Experience
              startYear={2020}
              endYear={2020}
              jobName="Miracle Messages (nonprofit Organization"
              jobDescription1="worked directly with the CEO of nonprofit organization to build an interactive map and tiered authorization for product dashboard, increasing the efficiency of the workflow at the organization."
                   
              jobDescription2="Wrote code with a small team of developers, using pair programming and alone"
              jobDescription3="Utilized agile software development and Git workflow on this project"
              jobDescription4="Gained hands-on experience with stakeholder meetings every week"
              jobDescription5="Designed original user experiences by building an interactive map, and tiered authorization for the dashboard and other functionality."
              jobDescription6="Used wireframe to picture the design of the dashboard."
              jobDescription7="Completed 3 product release cycles using measurable release canvases"
              jobDescription8="Wrote production-ready code using ReactJS, Redux, and CSS/SASS to build this single-page application" /> */}

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;