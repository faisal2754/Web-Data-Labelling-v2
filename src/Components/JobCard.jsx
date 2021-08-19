import React from 'react'
import "../Styles/JobCard.css"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AccountBalanceWalletSharpIcon from '@material-ui/icons/AccountBalanceWalletSharp';


function JobCard() {
    return (
        <div className= 'jobCard'>
            
            <img src="./images/purple_gradient.jpg"/> 
           
                <div className="jobCard__info">
                <div className="jobCard__name">
              <b> Job Name </b>  
            </div>
                    <b className="jobCard__price">
                        <AccountBalanceWalletSharpIcon/><strong> 1000</strong>
                    </b>
                <div className="jobCard__uploader">
                    <b>Uploader Details</b>
                </div>
            </div>
            

            <Button className="jobCard__button">
             <b>View Job</b>
            </Button>
        </div>
        
    )
}

export default JobCard
