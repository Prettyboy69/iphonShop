import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4'>About us</h1>
            <p className='lead mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi atque illum quam dolor
               similique laboriosam natus expedita blanditiis? Quia assumenda velit illum possimus aliquid 
               doloribus quasi animi libero excepturi aut ipsum nihil at, vero debitis molestiae. Expedita 
               excepturi cupiditate fugit. Autem ipsa illum itaque dolor laborum repellat repellendus, 
               consequatur voluptatibus quod dolorem doloremque ullam commodi animi temporibus adipisci,
                reiciendis placeat asperiores! Facilis vero nobis debitis, tenetur vitae cupiditate 
                illum qui fugiat tempora assumenda veniam excepturi aperiam culpa molestias magnam 
                laborum provident nostrum minus, iusto ad, modi nesciunt odio! 
              Rem sapiente eligendi minima sunt ullam? Laboriosam porro dolorem vel cupiditate modi lore  ipsum?
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src='/assets/images/about.png' alt='About us' height="400px" width="400px"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About