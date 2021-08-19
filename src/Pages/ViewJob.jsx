import React from 'react'
import JobCard from '../Components/JobCard'
import "../Styles/ViewJob.css"
import Button from '@material-ui/core/Button';

function ViewJob() {
    return (
        
        <div className="viewJob">

          
        <div className="viewJob__header">
          
          <img
            className="viewJob__banner"
            src="images\ViewJobsBanner.png"
            alt=""
          />  

          <div className="viewJob__headerWriting">
            <b>Find The Jobs That Interest You!</b>
          </div>

        
        </div>

        <div className="viewJob__filters"> 
          <b>Filter Your Jobs By: </b>
          <div className="viewJob__filterButtons">
            <Button variant="contained"  >Name Asc</Button>
            <Button variant="contained">Name Desc</Button>
            <Button variant="contained">Credits Asc</Button>
            <Button variant="contained">Credits Desc</Button>
            <Button variant="contained"># Images Asc</Button>
            <Button variant="contained"># Images Desc</Button>
            
          </div>
        </div>
        
         
        <div className="viewJob__container">
        
          <div className="viewJob__row">
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
          </div>
  
          <div className="viewJob__row">
          <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
          </div>
  
          <div className="viewJob__row">
          <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
              </div>
        </div>
      </div>
    )
}

export default ViewJob
