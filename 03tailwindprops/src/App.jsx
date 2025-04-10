import React, { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Ahmad",
    age: 21
  }

  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>
        Tailwind test
      </h1>

      <Card username="chaiaurcode" btnText="click me"/>
      <Card username="Ahmad"  btnText="visit me"/>
    </>
  )
}

export default App
