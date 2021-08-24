import React from 'react'
import '../Styles/Modal.css'

function Modal({ setOpenModal }, props) {
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
         </div>
      </div>
   )
}

export default Modal
