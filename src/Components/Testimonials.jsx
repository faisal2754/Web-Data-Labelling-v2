import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import '../Styles/Testimonials.css'

export default class Testimonials extends Component {
   render() {
      return (
         <div className="testimonials">
            <h2 className="testimonials-heading">Testimonials</h2>
            <Carousel
               showArrows={true}
               infiniteLoop={true}
               showThumbs={false}
               showStatus={false}
               autoPlay={true}
               interval={6100}
            >
               <div>
                  <img src="./images/p1.png" alt="imgstuff" />
                  <div className="myCarousel">
                     <h3>Elon Musk</h3>
                     <h4>Entrepreneur</h4>
                     <p>
                        When the data labelling is important enough, you do it
                        even if the odds of labelling are not in your favor
                     </p>
                  </div>
               </div>

               <div>
                  <img src="./images/p3.png" alt="imgstuff"/>
                  <div className="myCarousel">
                     <h3>Emilia Clarke</h3>
                     <h4>Actress</h4>
                     <p>
                        I love this website! I cant recommend it any further, it
                        deserves the highest regard in all stations of ML
                     </p>
                  </div>
               </div>

               <div>
                  <img src="./images/p2.jpg" alt="imgstuff"/>
                  <div className="myCarousel">
                     <h3>Gucci Mane</h3>
                     <h4>Musician</h4>
                     <p>
                        If a man does not have the data labelled, then he is
                        lost. But the same man can be lost in the labelling
                     </p>
                  </div>
               </div>
            </Carousel>
         </div>
      )
   }
}
