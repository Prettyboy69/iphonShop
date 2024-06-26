import React from 'react'

const SignUp = () => {
  return (
    
    <>
    {/* <!-- Button trigger modal --> */}
    <button
      type="button"
      className="btn btn-outline-primary ms-2"
      data-bs-toggle="modal"
      data-bs-target="#SignupModal"
    >
     <span className="fa fa-user-plus ms-1" ></span>REGISTER
    </button>

    {/* <!-- Modal --> */}
    <div
      className="modal fade"
      id="SignupModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Login
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
              <button className="btn btn-primary w-100 mb-4">
                 <span className="fa fa-google me-2"></span> sign up with google
                  </button>

                  <button className="btn btn-primary w-100 mb-4">
                 <span className="fa fa-facebook me-2"></span> sign up with facebook
                  </button>
                  
                  
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInput" className="form-label">
                  USERNAME
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInput"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-outline-primary w-100 mt-5">
                Register
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUp