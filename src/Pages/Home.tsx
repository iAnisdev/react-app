import { useContext } from 'react'
import { Outlet } from "react-router-dom";
import { Appbar } from "../Components/Appbar";
import { CurrentPageContext } from '../Context/CurrentPage'


export default function Home() {
  const { CurrentPage } = useContext(CurrentPageContext)
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
            <div className="px-4 py-6 sm:px-0">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
                <Outlet />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}