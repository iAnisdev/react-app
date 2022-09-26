import React, { useState } from 'react'
import { useSubmit } from 'react-router-dom'

function Home() {
  let [email , setNamne] = useState(() => {
    return ''
  })
  let submit = useSubmit()
  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
   submit({
    email
   }, {method: 'post' , action: '/product/1'})
  }
  return (
    <div>
      <form action="/product/1" method="get" onSubmit={(e) => {handleSubmit(e)}}>
        <input type="email" name="email" value={email}  onChange={(e) => {setNamne(e.target.value)}}/>
        
        <input type="submit" />
      </form>

      <br />
      <nav>
    </nav>
    </div>
  )
}

export default Home