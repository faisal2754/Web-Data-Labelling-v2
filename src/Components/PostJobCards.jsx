import React from 'react'
import CardItem from './CardItem'
import '../Styles/PostJobCards.css'

function PostJobCards() {
   return (
      <div className="cards">
         <h2></h2>
         <div className="cards__container">
            <div className="cards__wrapper">
               <ul className="cards__items">
                  <CardItem
                     src="./images/HowTo/login3.gif"
                     text="In order to use our platform, you need to log in. If you haven't already, you can create an account here."
                     credits="Step 1"
                     path="/"
                  />
                  <CardItem
                     src="./images/HowTo/login5.gif"
                     text="Now that you've logged in, you can navigate to the page to post your Job . Currently we only support Data Labelling jobs that utilize pictures but plan to expand in the future."
                     credits="Step 2"
                     path="/"
                  />
                  <CardItem
                     src="./images/HowTo/login6.gif"
                     text="Fill in your details in the available fields. Make sure to keep details as precise as possible for better results."
                     credits="Step 3"
                     path="/"
                  />
                  <CardItem
                     src="./images/HowTo/submit.gif"
                     text="You can now sit back and relax while we let one of our top tier community members do the labelling."
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
