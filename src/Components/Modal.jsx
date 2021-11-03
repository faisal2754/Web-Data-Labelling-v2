import React, { useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import '../Styles/Modal.css'
import ReactTooltip from 'react-tooltip'
// import { Link, Redirect, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { useHistory } from 'react-router'
import { useMutation, useQuery } from '@apollo/client'
import { ACCEPT_JOB, DELETE_JOB, JOB_RESULTS } from '../graphql/mutations'
import { GET_ACCEPTED_JOBS, GET_CREATED_JOBS } from '../graphql/queries'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import swal from 'sweetalert'

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
   margin-bottom: 15%;
   width: 800px;
   height: 400px;
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
   margin-top: 5%;
   margin-top: 8.5%;
   object-fit: cover;
   width: 400px;
   height: 330px;
   padding-top: 2rem;
   padding-bottom: 2rem;
   padding-left: 2rem;
   padding-right: 2rem;
   border-radius: 45px;
   background: #fff;
`

const ModalContent = styled.div`
   display: flex;
   flex-direction: column;
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
   id,
   showModal,
   setShowModal,
   src,
   destination,
   text,
   uploader,
   credits,
   title,
   buttonLabel,
   deletable,
   acceptable,
   completeable
}) => {
   const history = useHistory()
   const jwt = useSelector((state) => state.user.jwt)
   const jwt1 = Cookies.get('jwt')
   // var buttonPressed=false
   const modalRef = useRef()
   const animation = useSpring({
      config: {
         duration: 250
      },
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(0%)` : `translateY(-100%)`
   })
   // eslint-disable-next-line no-unused-vars
   const [AcceptJob, { loading, error, data }] = useMutation(ACCEPT_JOB, {
      fetchPolicy: 'no-cache',
      onCompleted: (data) => {
         setTimeout(history.push('/dashboard/accepted-jobs'), 1000)
      }
   })

   // eslint-disable-next-line no-unused-vars
   const [deleteJob, { delLoading, delError, delData }] = useMutation(
      DELETE_JOB,
      {
         refetchQueries: [GET_CREATED_JOBS, 'createdJobs']
      }
   )
   //Get Job Results Mutation
   const [JobResults, { resultsLoading, resultsError, resultsData }] =
      useMutation(JOB_RESULTS, {
         onCompleted: (resultsData) => {
            const win = window.open(resultsData.jobResults, '_blank')
            win.focus()
         }
      })
   // const closeModal = (e) => {
   //    if (modalRef.current === e.target) {
   //       setShowModal(false)
   //    }
   // }
   // const [AcceptedJobs, {loading, error }] = useQuery(GET_ACCEPTED_JOBS, {
   //    fetchPolicy: 'no-cache'
   // })
   const getResults = () => {
      toast.error('This feature is coming soon...')
   }

   const keyPress = useCallback(
      (e) => {
         if (e.key === 'Escape' && showModal) {
            setShowModal(false)
         }
      },
      [setShowModal, showModal]
   )

   useEffect(() => {
      document.addEventListener('keydown', keyPress)
      return () => document.removeEventListener('keydown', keyPress)
   }, [keyPress])

   //This checks their login on page load
   if (!jwt1) {
      destination = '/login'
   }

   const acceptJob = () => {
      if (!jwt) {
         history.push('/login')
      } else {
         // eslint-disable-next-line eqeqeq
         if (destination.pathname != '/label-job') {
            AcceptJob({
               variables: {
                  job_id: id
               },
               refetchQueries: [{ query: GET_ACCEPTED_JOBS }]
            }).catch((error) => {
               // toast.error('You have already accepted this job', {
               //    position: toast.POSITION.BOTTOM_CENTER
               // })
            })

            toast.clearWaitingQueue() //Prevents duplicates of the toast from coming up
         } else {
            localStorage.setItem('jobID', String(id))
         }
      }
   }

   const jobResults = () => {
      JobResults({
         variables: {
            job_id: id
         }
      }).catch((error) => {})
   }

   return (
      <div id={id}>
         {showModal ? (
            <Background ref={modalRef}>
               <animated.div style={animation}>
                  <ModalWrapper showModal={showModal}>
                     <ModalImg alt="Travel" src={src} />

                     <ModalContent>
                        <div className="modal__jobName">
                           <h1>{title}</h1>
                        </div>

                        <div className="modal__content">
                           <div className="modal__uploaderLine">
                              Job Owner: {uploader}
                           </div>
                           <div className="modal__creditLine">
                              Credits:‎ ‎${credits}
                           </div>

                           <div className="modal__descriptionLine">
                              Description:‎ ‎{text}
                           </div>
                           {deletable ? (
                              <button
                                 className="modal__ownedJobs"
                                 onClick={() => {
                                    swal({
                                       title: 'Are you sure?',
                                       text: 'You will not be able to recover this job!',
                                       icon: 'warning',
                                       buttons: [true, 'Yes, delete'],
                                       dangerMode: true
                                    })
                                       .then(() => {
                                          deleteJob({
                                             variables: {
                                                job_id: id
                                             }
                                          })
                                       })
                                       .then(() => {
                                          toast.warning('Job Deleted!')
                                       })
                                 }}
                              >
                                 {buttonLabel}
                              </button>
                           ) : acceptable ? (
                              <Link>
                                 <button
                                    className="modal__acceptJob"
                                    onClick={acceptJob}
                                 >
                                    {loading ? 'Loading...' : buttonLabel}
                                 </button>
                              </Link>
                           ) : completeable ? (
                              <Link>
                                 <button
                                    className="modal__acceptJob"
                                    data-tip="Get your results via a Google Drive CSV file"
                                    onClick={jobResults} // in this scenario , the function wont run
                                 >
                                    {resultsLoading
                                       ? 'Loading...'
                                       : buttonLabel}
                                 </button>
                                 <ReactTooltip effect="solid" />
                              </Link>
                           ) : (
                              <Link to={destination}>
                                 <button
                                    className="modal__acceptJob"
                                    data-tip="Do Job"
                                    onClick={acceptJob} // in this scenario , the function wont run
                                 >
                                    {buttonLabel}
                                 </button>
                                 <ReactTooltip effect="solid" />
                              </Link>
                           )}
                        </div>
                     </ModalContent>
                     <CloseModalButton
                        aria-label="Close modal"
                        onClick={() => setShowModal((prev) => !prev)}
                     />
                  </ModalWrapper>
               </animated.div>
            </Background>
         ) : null}
      </div>
   )
}

export default Modal
