import React from 'react'
import "../Styles/JobCard.css"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


function JobCard() {
    return (
        <div className= 'jobCard'>
            
            <img src="./images/purple_gradient.jpg"/> 
           
                <div className="jobCard__info">
                <div className="jobCard__name">
              Job Name  
            </div>
                    <p className="jobCard__price">
                        <small>Credits </small>
                        <strong>1000</strong>
                    </p>
                <div className="jobCard__rating">
                    <p>*</p>
                </div>
            </div>
            

            <Button className="jobCard__button">
             <b>View Job</b>
            </Button>
        </div>
        
    )
}

export default JobCard
