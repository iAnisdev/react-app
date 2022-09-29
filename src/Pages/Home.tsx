import { useContext } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from "react-router-dom";
import { Appbar } from "../Components/Appbar";
import { CurrentPageContext } from '../Context/CurrentPage'
import { State } from '../Store/Store';

export default function Home() {
  const { CurrentPage } = useContext(CurrentPageContext)
  // const Auth = useSelector((state: State) => state.Auth)
  // const navigate = useNavigate()

  // if(!Auth.isLoggedIn){
  //   navigate('/auth')
  // }

  return (
    <>
      <div className="min-h-full">
        <Appbar />
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{CurrentPage}</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <div className="h-96 p-4 rounded-lg border-4 border-dashed border-gray-200">
                <Outlet />
              </div>
          </div>
        </main>
      </div>
    </>
  )
}