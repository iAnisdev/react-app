import React from 'react'
import { Outlet } from 'react-router-dom'

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <br />
      <nav>
        <ul>
          <li><a href="/profile/Contact">Contact</a></li>
          <li><a href="/profile/About">About</a></li>
        </ul>
      </nav>
      <br />
      <Outlet />
    </div>
  )
}

export default Profile