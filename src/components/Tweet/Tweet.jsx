import React, {
  useEffect,
  useState
} from 'react'
import {
  doc,
  getDoc
} from "firebase/firestore";
import { db } from '../../firebase';
import './Tweet.css'

export const Tweet = ({ tweet }) => {

  const [user, setUser] = useState({})

  const getUser = async () => {
    const docRef = doc(db, "users", tweet.userName);
    const docSnap = await getDoc(docRef);
    const userData = docSnap.data()
    setUser(userData)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="tweet-card">
      <div className="tweet-card-top">
        <div className="tweet-card-pic">
          <img src={`${user.profileImgURL}`} />
        </div>
        <div className="tweet-card-info">
          <div>{user.userName}</div>
          <div>{tweet.date}</div>
        </div>
      </div>
      <div>{tweet.content}</div>
    </div>
  )
}
