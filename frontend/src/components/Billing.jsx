import React, { useEffect } from 'react'

function Billing() {

const fetchdata = async() => {
     let res = await fetch(`http://localhost:8080/items`)

     let data = await res.json()
     console.log(data)
}

useEffect(() => {
    fetchdata()
}, [])




  return (
    <div>Billing</div>
  )
}

export default Billing