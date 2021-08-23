import React from 'react'
import CardItem from './CardItem'
import '../Styles/PostJobCards.css'

function PostJobCards() {
   return (
      <div className="cards">
         <div className="cards__container">
            <div className="cards__wrapper">
               <ul className="cards__items">
                  <CardItem
                     src="./images/HowTo/login2.gif"
                     text="In order to use our platform for finding a job, it is advisable for you to log in to gain full functionality of our platform but it is not required to view available jobs. If you haven't already, you can create an account here."
                     credits="Step 1"
                     path="/"
                  />
                  <CardItem
                     src="./images/HowTo/login5.gif"
                     text="Navigating to the page will allow you to see all available data labelling jobs. You can also sort the jobs based on different filters. Select a data labelling job which you would like to work on. You can either accept the job or change your mind and hit cancel and unselect the job."
                     credits="Step 2"
                     path="/"
                  />
               </ul>
            </div>
         </div>

         <div className="cards__container">
            <div className="cards__wrapper">
               <ul className="cards__items">
                  <CardItem
                     src="./images/HowTo/login.gif"
                     text="You can select accept job to work on the job you have picked out. If you have not already signed in, you will be prompted to. Once you are signed in you will be taken to your dashboard where you can view the selected job under 'Accepted Jobs' and work on it."
                     credits="Step 3"
                     path="/"
                  />
                  <CardItem
                     src="./images/HowTo/find.gif"
                     text="Select the accepted job in your dashbaord to start the data labelling process. On the labelling page, select a label for each image. Once the labelling is complete, you will receive a success message to inform you that the labelling job is completed."
                     credits="Step 4"
                     path="/"
                  />
               </ul>
            </div>
         </div>
      </div>
   )
}

export default PostJobCards
