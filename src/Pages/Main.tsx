import React from 'react'
import { useLocation } from 'react-router-dom'

function Main() {
  const location = useLocation()
  console.log(location)
  return (
    <div>Main</div>
  )
}

export default Main