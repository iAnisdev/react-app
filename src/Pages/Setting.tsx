import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

function Setting() {
  const [searchParams , setsearchParams] = useSearchParams()
  console.log(searchParams.get('name'))
  useEffect(() => {
    setTimeout(() => {
      setsearchParams({name: 'ACED'})
    }, 1000);
  }, [])
  return (
    <div>Setting</div>
  )
}

export default Setting