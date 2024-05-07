import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { 
  setDoc,
  doc,
} from 'firebase/firestore';
import { 
  db,
  auth 
} from '../../firebase';
import './SignUp.css'


export const SignUp = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [authError, setAuthError] = useState(false)
  const [authMessage, setAuthMessage] = useState("")
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {   
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const userRef = doc(db, 'users', userCredential.user.uid)
      await setDoc(userRef, { email: email, password: password })
      navigate('/')
    } catch (error) {
      console.log(error)
      setAuthMessage("Sign up failed: Either email exists or password isn't valid")
      setAuthError(true)
    }
  }

  return (
    <div id="sign-up">
      <h2>Sign up</h2>
      <form onSubmit={handleSignUp}>
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
        <button id="signup-button">Sign up</button>
      </form>
      {authError ? (
        <div className="auth-error">
          {authMessage}
        </div>
        ) : ("")}
      <p id="account-already">Already have an account? <span style={{textDecorationLine: 'underline'}}><a href='/'>Login here</a></span></p>
    </div>
  )
}
