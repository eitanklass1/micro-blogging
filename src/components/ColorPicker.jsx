import React, { useState } from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/MyProvider'
import { useNavigate } from 'react-router-dom'

export const ColorPicker = () => {

  const [curColor, setCurColor] = useState("")
  const { color, setColor } = useContext(MyContext)

  const navigate = useNavigate()

  return (
    <div>
      <input value={curColor} onChange={(e) => {setCurColor(e.target.value)}} />
      <button onClick={() => {setColor(curColor); navigate("/home")}}>Choose Color</button>
    </div>
  )
}
