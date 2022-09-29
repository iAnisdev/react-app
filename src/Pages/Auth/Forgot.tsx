
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { FirebaseContext } from '../../firebase/FirebaseContext'

export default function Forgot() {
  const { reset } = useContext(FirebaseContext)
  const [user, setUser] = useState(() => {
    return {
      email: ''
    }
  })

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  function handleSumbit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    reset(user.email)
  }
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-screen">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Reset your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={(e) => { handleSumbit(e) }}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={user.email}
                  onChange={(e) => { handleChange(e) }}
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>


            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Send Reset Link
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">

              </div>

              <div className="text-sm">
                <Link to="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Remember now?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}