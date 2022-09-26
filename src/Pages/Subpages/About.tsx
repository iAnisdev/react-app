import React from 'react'
import { useOutletContext } from 'react-router-dom'

function About() {
  const { name } = useOutletContext() as any
  return (
    <div>About {name}</div>
  )
}

export default About