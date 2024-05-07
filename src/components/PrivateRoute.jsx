import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {

  const { userID } = useContext(UserContext)
  console.log(userID)

  return (
    <div>{userID ? children : <Navigate to="/" />}</div>
  )
}
