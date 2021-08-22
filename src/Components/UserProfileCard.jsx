import React from 'react'

const UserProfile = (props) => {
   return (
      <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
         <div className="card card-profile shadow">
            <div className="row justify-content-center">
               <div className="col-lg-3 order-lg-2">
                  <div className="card-profile-image">
                     <a href="#">
                        <img
                           src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg"
                           className="rounded-circle"
                        />
                     </a>
                  </div>
               </div>
            </div>
            <div className="card-body pt-0 pt-md-4">
               <div className="text-center">
                  <h3>
                     {props.firstName} {props.lastName}
                     <span className="font-weight-light">, {props.age}</span>
                  </h3>
                  <div className="h5 mt-4">
                     <i className="ni business_briefcase-24 mr-2" />
                     {props.title}
                  </div>
                  <div>
                     <i className="ni education_hat mr-2" />
                     {props.education}
                  </div>
                  {/* <a href="#">Show more</a> */}
               </div>
            </div>
         </div>
      </div>
   )
}

export default UserProfile
