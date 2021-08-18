import React from 'react'
import CardItem from './CardItem'
import '../Styles/Cards.css'

function Cards() {
   return (
      <div className="cards">
         <h2>Check Out Some of our Labelling Jobs</h2>
         <div className="cards__container">
            <div className="cards__wrapper">
               <ul className="cards__items">
                  <CardItem
                     src="./images/purple_gradient.jpg"
                     text="Here is a Labelling Job"
                     credits="5000 credits"
                     path="/"
                  />
                  <CardItem
                     src="./images/purple_gradient.jpg"
                     text="Here is another Labelling Job"
                     credits="2500 credits"
                     path="/"
                  />
                  <CardItem
                     src="./images/purple_gradient.jpg"
                     text="Here is a third Labelling Job"
                     credits="1 credit"
                     path="/"
                  />
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Cards
