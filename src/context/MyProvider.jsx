import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const MyContext = createContext()

export const MyProvider = ({ children }) => {

  const [color, setColor] = useState("red")

  return <MyContext.Provider value={{ color, setColor }}>{ children }</MyContext.Provider>
}
