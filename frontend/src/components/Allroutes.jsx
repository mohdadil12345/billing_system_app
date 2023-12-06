import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Item from './Item'
import Billing from './Billing'

function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path = "/item" element = {<Item/>}/>
            <Route path = "/billing" element = {<Billing/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes