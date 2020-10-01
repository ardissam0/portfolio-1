import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
          <p>{this.props.schoolDescription1}</p>
          <ul>
            <li>{this.props.schoolDescription2}</li>
            <li>{this.props.schoolDescription3}</li>
            <li>{this.props.schoolDescription4}</li>
            <li>{this.props.schoolDescription5}</li>
            <li>{this.props.schoolDescription6}</li>
            <li>{this.props.schoolDescription7}</li>
          </ul>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
