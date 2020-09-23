import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            </div>
            <h2 style={{paddingTop: '2em'}}>Samuel Ardis </h2>
            <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
            <hr style={{borderTop: '3px solid black', width: '50%'}}/>
            <p>Web Developer with 1 year of experience structuring, developing and implementing interactive websites and applications. Able to complete projects efficiently and satisfy customers with attractive, user-friendly applications.</p>
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
            <h2>Education</h2>


            <Education
              startYear={2014}
              endYear={2022}
              schoolName="Grand Valley State University (BS)"
              schoolDescription="Junior level status with courses completed in multiple disciplines. Currently on a hiatus from GVSU due to extenuating circumstances and the Covid-19 virus."
               />

               <Education
                 startYear={2019}
                 endYear={2020}
                 schoolName="Lambda School (Bootcamp)"
                 schoolDescription="Completed the Full Stack Web Development curriculumn with Computer Science fundamentals. Over 1,300 hours."
                  />
                <hr style={{borderTop: '3px solid white'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={2020}
              jobName="Lambda Labs Project (Miracle Messages)"
              jobDescription="Worked with the CEO of Miracle Messages, a nonprofit organization that helps the homeless. I worked with a team of 4 other web developers to create a beautiful website with an interactive map and much more, flying through 3 product release cycles over the course of 1.5 months."
              />

              <hr style={{borderTop: '3px solid white'}} />
              <h2>Skills</h2>
              <Skills
                  skill="HTML/CSS"
                  progress={90}
                  />
              <Skills
                skill="javascript"
                progress={75}
                />
                <Skills
                      skill="React"
                      progress={70}
                      />
                <Skills  
                    skill="Python"
                    progress={75}
                    />
                <Skills  
                    skill="NodeJS"
                    progress={60}
                    />
                <Skills  
                    skill="SQL"
                    progress={45}
                    />
                    

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;