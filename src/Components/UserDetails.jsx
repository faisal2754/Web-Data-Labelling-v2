import { Card } from '@material-ui/core'
import React from 'react'

const UserDetails = () => {
   return (
      <div className="col-xl-8 order-xl-1">
         <div className="card bg-secondary shadow">
            <div className="card-header bg-white border-0">
               <div className="row align-items-center">
                  <div className="col-8">
                     <h3 className="mb-0">My account</h3>
                  </div>
                  <div className="col-4 text-right">
                     <a href="#!" className="btn btn-sm btn-primary">
                        Settings
                     </a>
                  </div>
               </div>
            </div>
            <div className="card-body">
               <form>
                  <h6 className="heading-small text-muted mb-4">
                     User information
                  </h6>
                  <div className="pl-lg-4">
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
                                 placeholder="Username"
                                 defaultValue="lucky.jesse"
                              />
                           </div>
                        </div>
                        <div className="col-lg-6">
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
                                 placeholder="jesse@example.com"
                              />
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-lg-6">
                           <div className="form-group focused">
                              <label
                                 className="form-control-label"
                                 htmlFor="input-first-name"
                              >
                                 First name
                              </label>
                              <input
                                 type="text"
                                 id="input-first-name"
                                 className="form-control form-control-alternative"
                                 placeholder="First name"
                                 defaultValue="Lucky"
                              />
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="form-group focused">
                              <label
                                 className="form-control-label"
                                 htmlFor="input-last-name"
                              >
                                 Last name
                              </label>
                              <input
                                 type="text"
                                 id="input-last-name"
                                 className="form-control form-control-alternative"
                                 placeholder="Last name"
                                 defaultValue="Jesse"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                     <div className="form-group focused">
                        <label>About Me</label>
                        <textarea
                           rows={4}
                           className="form-control form-control-alternative"
                           placeholder="A few words about you ..."
                           defaultValue={
                              'A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.'
                           }
                        />
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default UserDetails
