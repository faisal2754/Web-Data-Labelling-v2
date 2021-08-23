import React from 'react'
import '../Styles/Modal.css'

function Modal(props , {setOpenModal}) {
    return (
        <div className="modal__background">
            <div className="modal__container">
                <div className="modal__close">
                <button onClick={() => {setOpenModal(false);}}> X </button>
                </div>
                <div className="modal__jobName">
                    {props.name}
                </div>
                <div className="modal__wrapper">
                <img
                  className="modal__image"
                  alt="Travel"
                  src={props.src}
               />  
               </div>
                <div className="modal__description">
                    {props.description}
                </div>  
                <div className="modal__credits">
                 <b>$</b>
                 {props.credits}
                </div>  
                <div className="modal__uploader">
                    {props.uploader}
                </div>  
    
                
            </div>
        </div>
    )
}

export default Modal
