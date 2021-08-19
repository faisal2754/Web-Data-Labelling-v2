import React from 'react'
import JobCard from '../Components/JobCard'
import "../Styles/ViewJob.css"
import Button from '@material-ui/core/Button';
import CardItem from '../Components/CardItem'
import '../Styles/Cards.css'

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
            <Button variant="contained"  ><b>Name Asc</b></Button>
            <Button variant="contained"><b>Name Desc</b></Button>
            <Button variant="contained"><b>Credits Asc</b></Button>
            <Button variant="contained"><b>Credits Desc</b></Button>
            <Button variant="contained"><b># Images Asc</b></Button>
            <Button variant="contained"><b># Images Desc</b></Button>
            
          </div>
        </div>
        
         
        <div className="viewJob__container">
        
          <div className="viewJob__row">
          <CardItem
                     src="./images/purple_gradient.jpg"
                     text="Job Name"
                     credits="1 credit"
                     
                  />
                  <CardItem
                     src="./images/purple_gradient.jpg"
                     text="Job Name"
                     credits="1 credit"
                     
                  />
                  <CardItem
                     src="./images/purple_gradient.jpg"
                     text="Job Name"
                     credits="1 credit"
                     
                  />
                  <CardItem
                     src="./images/purple_gradient.jpg"
                     text="Job Name"
                     credits=" credit"
                     
                  />
          </div>
        </div>
  
          
      </div>
    )
}

export default ViewJob
