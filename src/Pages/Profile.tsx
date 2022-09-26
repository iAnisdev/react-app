import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <br />
      <nav>
        <ul>
          <li><NavLink style={({isActive}) => {
            return isActive ? {color: 'red'} : {}
          }} to="/profile/Contact" >Contact</NavLink></li>
          <li><Link to="/profile/About">About</Link></li>
        </ul>
      </nav>
      <br />
      <Outlet context={{name: 'test'}} />
    </div>
  )
}

export default Profile