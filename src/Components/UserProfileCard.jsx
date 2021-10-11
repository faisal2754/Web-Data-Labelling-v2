import React from 'react'
import { useSelector } from 'react-redux'

const UserProfile = (props) => {
   const username = useSelector((state) => state.user.username)

   return (
      <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
         <div className="card card-profile shadow">
            <div className="row justify-content-center">
               <div className="col-lg-3 order-lg-2">
                  <div className="card-profile-image">
                     <img
                        src={`https://avatars.dicebear.com/api/bottts/${props.firstName}.svg`}
                        className="rounded-circle"
                        alt=""
                     />
                  </div>
               </div>
            </div>
            <div className="card-body pt-0 pt-md-4">
               <div className="text-center">
                  <h3>
                     Username:
                     <span className="font-weight-light">
                        {' '}
                        {props.firstName}
                     </span>
                  </h3>
                  <h3>
                     Credits:
                     <span className="font-weight-light">
                        {' '}
                        ${props.balance}
                     </span>
                  </h3>
               </div>
            </div>
         </div>
      </div>
   )
}

export default UserProfile
