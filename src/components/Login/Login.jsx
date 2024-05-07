import React, { 
  useState,
  useContext
} from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from '../../firebase';
import { UserContext } from '../../context/UserProvider'
import './Login.css'
import '../../App.css'

export const Login = () => {

  const { setUserID } = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [authError, setAuthError] = useState(false)
  const [authMessage, setAuthMessage] = useState("")

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      setUserID(userCredential.user.uid)
      localStorage.setItem('userId', userCredential.user.uid)
      navigate('/home')
    } catch (error) {
      console.log(error)
      setAuthMessage("Login Failed: Your email or password is incorrect")
      setAuthError(true)
    }  
  }

  return (
    <div id="log-in">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label id="email-label">Email</label>
        <input
          id="email-input"
          type="text"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
          required
        />
        <label id="password-label">Password</label>
        <input
          id="password-input"
          type="password"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
          required
        />
        <button id="login-button">Login</button>
      </form>
      {authError ? (
        <div className="auth-error">
          {authMessage}
        </div>
        ) : ("")}
      <p id="account-already">Don't have an account? <span style={{textDecorationLine: 'underline'}}><a href='/sign-up'>Sign up here</a></span></p>
    </div>
  )
}
