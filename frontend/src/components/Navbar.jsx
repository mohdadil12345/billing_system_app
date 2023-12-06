import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
    <Link to ="/item">Item</Link>
    <Link to ="/billing">Billing</Link>
    </div>
  )
}

export default Navbar