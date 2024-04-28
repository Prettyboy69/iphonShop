// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import  { useSelector } from  "react-redux"

// const CartBtn = () => {
//   //  we get a state of additems
//   const state = useSelector((state) => state.additem)
//   return (
//     <>
//     <NavLink to="/cart" className="btn btn-outline-primary ms-2">
//       <span className='fa fa-shopping-cart me-1'></span> Cart({state.length})

//     </NavLink>
//     </>
//   )
// }

// export default CartBtn

import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {
    // We get a state of addItems
    // Write the name of the file not the function
    const state = useSelector((state)=> state.addItem)
    return (
        <>
            <NavLink to="/cart" className="btn btn-outline-primary ms-2">
                <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
            </NavLink>
        </>
    )
}

export default CartBtn
