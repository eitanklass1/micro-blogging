import React, { useState } from 'react'
import { 
  useContext,
} from 'react'
import { UserContext } from '../../context/UserProvider'
import { 
  ref,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import {
  storage,
  db,
} from '../../firebase';
import {
  doc,
  updateDoc,
} from 'firebase/firestore'
import './UserPage.css'

export const UserPage = () => {

  const { userName, userID } = useContext(UserContext)
  const [userNameText, setUserNameText] = useState("" || userName)
  const [userImg, setUserImg] = useState('')


  function handleUsernameChange (e) {
    e.preventDefault()
    setUserNameText(e.target.value)
  }

  function handleProfilePicChange (e) {
    setUserImg(e.target.files[0])
  }

  async function handleSubmit (e) {
    e.preventDefault()
    const imgRef = ref(storage, `/images/${userImg.name}`) // Where we want to store it
    await uploadBytes(imgRef, userImg) // What we want to store
    const imgURL = await getDownloadURL(imgRef)

    const userRef = doc(db, "users", userID)
    await updateDoc(userRef, {
      profileImgURL: imgURL,
      userName: userNameText
    })
    console.log("successs")
    localStorage.setItem("username", JSON.stringify(userNameText))
  }

  return (
    <div id="profile">
      <h1 id="profile-header">Profile</h1>
      <form>
        <div id="username-label">Username</div>
        <input
          id="profile-username"
          value={userNameText}
          onChange={handleUsernameChange}
        />
        <div id="submit-container">
          <button
            id="username-submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div id="profile-pic-label">Upload image</div>
        <input
          type="file"
          id="profile-picture"
          onChange={handleProfilePicChange}
        />
      </form>
    </div>
  )
}
