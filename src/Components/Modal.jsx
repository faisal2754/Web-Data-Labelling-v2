import React, { useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import '../Styles/Modal.css'

const Background = styled.div`
   z-index: 1;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.8);
   position: fixed;
   display: flex;
   justify-content: center;
   align-items: center;
`

const ModalWrapper = styled.div`
   width: 800px;
   height: 500px;
   box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
   background: #fff;
   color: #000;
   display: grid;
   grid-template-columns: 1fr 1fr;
   position: relative;
   z-index: 10;
   border-radius: 10px;
`

const ModalImg = styled.img`
   display: block;
   width: 100%;
   max-height: 500px;
   border-radius: 10px 0 0 10px;
   background: #000;
`

const ModalContent = styled.div`
   display: flex;
   flex-direction: column;
   // justify-content: center;
   align-items: center;
   line-height: 1.8;
   color: #141414;
   p {
      margin-bottom: 1rem;
   }
   button {
      padding: 10px 24px;
      background: #141414;
      color: #fff;
      border: none;
   }
`

const CloseModalButton = styled(MdClose)`
   cursor: pointer;
   position: absolute;
   top: 20px;
   right: 20px;
   width: 32px;
   height: 32px;
   padding: 0;
   z-index: 10;
`

export const Modal = ({
   showModal,
   setShowModal,
   src,
   text,
   uploader,
   credits,
   title
}) => {
   const modalRef = useRef()

   const animation = useSpring({
      config: {
         duration: 250
      },
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(0%)` : `translateY(-100%)`
   })

   const closeModal = (e) => {
      if (modalRef.current === e.target) {
         setShowModal(false)
      }
   }

   const keyPress = useCallback(
      (e) => {
         if (e.key === 'Escape' && showModal) {
            setShowModal(false)
            console.log('I pressed')
         }
      },
      [setShowModal, showModal]
   )

   useEffect(() => {
      document.addEventListener('keydown', keyPress)
      return () => document.removeEventListener('keydown', keyPress)
   }, [keyPress])

   return (
      <div>
         {showModal ? (
            <Background ref={modalRef}>
               <animated.div style={animation}>
                  <ModalWrapper showModal={showModal}>
                     <ModalImg alt="Travel" src={src} />
                     <ModalContent>
                        <div className="modal__jobName">
                           <h1>
                              <b>{title}</b>
                           </h1>
                        </div>

                        <div className="modal__uploaderLine">
                           Job Owner: {uploader} || Credits: {credits}
                        </div>

                        <div className="modal__descriptionLine">
                           Description: <br></br>
                           {text}
                        </div>

                        <button className="modal__acceptJob">Accept Job</button>
                     </ModalContent>
                     <CloseModalButton aria-label="Close modal" />
                  </ModalWrapper>
               </animated.div>
            </Background>
         ) : null}
      </div>
   )
}

export default Modal
