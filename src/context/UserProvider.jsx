import React, { 
  createContext,
  useState 
} from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

  const [userName, setUserName] = useState(() => {
    const saved = localStorage.getItem("username")
    const initial = JSON.parse(saved)
    return initial || "testUser"
  })
  const [userID, setUserID] = useState(localStorage.getItem('userId') || false)

  return <UserContext.Provider value={{
    userName: userName,
    setUserName: setUserName,
    userID: userID,
    setUserID: setUserID,
  }}>{children}</UserContext.Provider>
}
