import React from 'react';
import './signin.css'
const Registration = () => {
  return (
    <div className='A'>
      <form className="B">
        <h4>Register YourSelf!</h4>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control mt-2" placeholder="First name" />
          </div>

          <div className="col">
            <input type="text" className="form-control mt-2" placeholder="Last name" />
          </div>

        </div>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control mt-2" placeholder="Email" />
          </div>

          <div className="col">
            <input type="text" className="form-control mt-2 " placeholder="Phone Number" />
          </div>

        </div>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control mt-2" placeholder="Password" />
          </div>

          <div className="col">
            <input type="text" className="form-control mt-2 " placeholder="Confirm Pasword" />
          </div>

        </div>

        <a >
          Submit
        </a>
      </form>
    </div>
  )
}

export default Registration;