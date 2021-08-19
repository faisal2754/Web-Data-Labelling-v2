import { Card } from '@material-ui/core'
import React from 'react'
import JobCard from '../Components/JobCard'
import Navbar from '../Components/Navbar'
import "../Styles/ViewJob.css"
import CardItem from '../Components/CardItem'

function ViewJob() {
    return (
        
        <div className="viewJob">


            
        <div className="viewJob__container">
         
         
          <img
            className="viewJob__background"
            src="images\ViewJobsBackground.png"
            alt=""
          /> 
  
          <div className="viewJob__row">
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            {/* <JobCard/> */}
            {/* <JobCard/>
            <JobCard/> */}
            {/* jobCard */}
          </div>
  
          <div className="viewJob__row">
            
            {/*jobCard  */}
            {/* jobCard */}
            {/* jobCard */}
          </div>
  
          <div className="viewJob__row">
              {/*jobCard  */}
              </div>
        </div>
      </div>
    )
}

export default ViewJob
