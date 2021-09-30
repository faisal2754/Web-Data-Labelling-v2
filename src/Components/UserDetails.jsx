import React, { useState } from 'react'
import { EDIT_PROFILE } from '../graphql/mutations'
import { useMutation } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { GET_ME } from '../graphql/queries'
import { toast } from 'react-toastify'
import { useQuery } from '@apollo/client'
import { updateUsername } from '../redux/user'
import Loading from 'react-loading'

const UserDetails = (props) => {
   const { loading, error, data } = useQuery(GET_ME)
   const [EditProfile] = useMutation(EDIT_PROFILE)
   const showError = () => {
      toast.error('An error occured')
      toast.clearWaitingQueue()
   }
   const dispatch = useDispatch()
   const editUsername = () => {
      let userNameChange

      //check if username is empty
      if (document.getElementById('input-username').value === '') {
         userNameChange = props.username
      } else {
         userNameChange = document.getElementById('input-username').value
      }

      if (
         document.getElementById('input-passwordNew').value !==
         document.getElementById('input-passwordConfirm').value
      ) {
         toast.error("Passwords Don't Match")
      } else {
         EditProfile({
            variables: {
               username: userNameChange
            },
            refetchQueries: [{ query: GET_ME }]
         })
            .then(() => {
               toast.success('Your Details Have Been Changed')
            })
            .then(() => {
               dispatch(updateUsername(userNameChange))
            })
            .catch((error) => showError())
         toast.clearWaitingQueue()
      }
   }

   const editPassword = () => {
      let passwordChange
      // check if password is empty
      if (document.getElementById('input-passwordNew').value === '') {
         passwordChange = props.password
      } else {
         passwordChange = document.getElementById('input-passwordNew').value
      }

      if (document.getElementById('input-passwordConfirm').value === '') {
         passwordChange = props.password
      } else {
         passwordChange = document.getElementById('input-passwordNew').value
      }

      if (
         document.getElementById('input-passwordNew').value !==
         document.getElementById('input-passwordConfirm').value
      ) {
         toast.error("Passwords Don't Match")
      } else if (
         document.getElementById('input-passwordNew').value === '' ||
         document.getElementById('input-passwordConfirm').value === ''
      ) {
         toast.error('Passwords Are Empty')
      } else if (passwordChange.length < 5) {
         toast.error('Password must be at least 5 characters')
      } else {
         EditProfile({
            variables: {
               password: passwordChange
            },
            refetchQueries: [{ query: GET_ME }]
         })
            .then(() => {
               toast.success('Your Details Have Been Changed')
            })
            .catch((error) => showError())
         toast.clearWaitingQueue()
      }
   }

   return (
      <div className="col-xl-8 order-xl-1">
         <div className="card bg-secondary shadow">
            <div className="card-header bg-white border-0">
               <div className="row align-items-center">
                  <div className="col-8">
                     <h3 className="mb-0">My Account</h3>
                  </div>
                  <div className="col-6 text-right">
                     <a
                        onClick={editUsername}
                        href="#/dashboard/profile"
                        className="user-btn user-btn-sm user-btn-primary"
                     >
                        Update Username
                     </a>
                     &nbsp;
                     <a
                        onClick={editPassword}
                        href="#/dashboard/profile"
                        className="user-btn user-btn-sm user-btn-primary"
                     >
                        Update Password
                     </a>
                  </div>
               </div>
            </div>
            <div className="card-body">
               <form className="user--form">
                  <h6 className="heading-small text-muted mb-4">
                     User information
                  </h6>
                  <div className="pl-lg-6">
                     <div className="row">
                        <div className="col-lg-6">
                           <div className="form-group focused">
                              <label
                                 className="form-control-label"
                                 htmlFor="input-username"
                              >
                                 Username
                              </label>
                              <input
                                 type="text"
                                 id="input-username"
                                 className="form-control form-control-alternative"
                                 placeholder={loading? 'Loading...':data.me.username }
                              />
                           </div>
                        </div>
                        {/* <div className="col-lg-6">
                           <div className="form-group">
                              <label
                                 className="form-control-label"
                                 htmlFor="input-email"
                              >
                                 Email address
                              </label>
                              <input
                                 type="email"
                                 id="input-email"
                                 className="form-control form-control-alternative"
                                 placeholder={props.email}
                                 text={props.email}
                              />
                           </div>
                        </div> */}
                     </div>
                     <div className="row">
                        <div className="col-lg-6">
                           <div className="form-group focused">
                              <label
                                 className="form-control-label"
                                 htmlFor="input-last-name"
                                 placeholder="Password"
                              >
                                 New Password
                              </label>
                              <input
                                 type="text"
                                 id="input-passwordNew"
                                 className="form-control form-control-alternative"
                                 placeholder="New Password"
                                 defaultValue=""
                              />
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group focused">
                              <label
                                 className="form-control-label"
                                 htmlFor="input-passwordConfirm"
                                 placeholder="Confirm Password"
                              >
                                 Confirm Password
                              </label>
                              <input
                                 type="text"
                                 id="input-passwordConfirm"
                                 className="form-control form-control-alternative"
                                 placeholder="Confirm New Password"
                                 defaultValue=""
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default UserDetails
