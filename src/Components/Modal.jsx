import React from 'react'
import '../Styles/Modal.css'
import styled from 'styled-components'

<<<<<<< HEAD
function Modal(props, { setOpenModal }) {
=======
function Modal({ setOpenModal }, props) {
>>>>>>> 7b9c0d6611120f5808afca9440d443e944b2ea4a
   return (
      <div className="modal__background">
         <div className="modal__container">
            <div className="modal__close">
               <button
                  onClick={() => {
                     setOpenModal(false)
                  }}
               >
                  {' '}
                  X{' '}
               </button>
<<<<<<< HEAD
            </div>
            <div className="modal__jobName">{props.name}</div>
            <div className="modal__wrapper">
               <img className="modal__image" alt="Travel" src={props.src} />
            </div>
            <div className="modal__description">{props.description}</div>
            <div className="modal__credits">
               <b>$</b>
               {props.credits}
            </div>
            <div className="modal__uploader">{props.uploader}</div>
=======
            </div>
            <div className="modal__jobName">Job Name{/* {props.name} */}</div>
            <div className="modal__wrapper">
               <img
                  className="modal__image"
                  alt="Travel"
                  src="./images/purple_gradient.jpg"
                  //   src={props.src}
               />
            </div>
            <div className="modal__info">
               <div className="modal__description">
                  This is the description
                  {/* {props.description} */}
               </div>
               <div className="modal__credits">
                  <b>$</b> 100
                  {/* {props.credits} */}
               </div>
               <div className="modal__uploader">
                  Uploader Email{props.uploader}
               </div>
            </div>
>>>>>>> 7b9c0d6611120f5808afca9440d443e944b2ea4a
         </div>
      </div>
   )
}

export default Modal
