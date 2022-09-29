import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Logout() {
    let navigate = useNavigate()
    let [timer , setTimer] = useState(()=> {
        return 5
    })
    let timerInterval
    useEffect(() => {
        timerInterval =  setInterval(() => {
            setTimer(timer - 1)
        }, 1000);
        if(timer === 0) {
            clearInterval(timerInterval)
            return navigate('/auth/login')
        }
    })
  return (
    <div id="logout-page">
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-screen">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h5 className="mt-6 text-center text-3xl font-bold tracking-tight text-indigo-500">
            Logout Successfully
          </h5>
          <h6 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Redirecting in {timer} seconds
          </h6>
        </div>
        <div className="flex items-center justify-center">

          <div className="text-sm">
            <Link to="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Login Again?
            </Link>
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Logout