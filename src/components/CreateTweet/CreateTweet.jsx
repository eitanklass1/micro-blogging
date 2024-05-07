import React from 'react'
import {
  useState,
  useEffect,
  useContext
} from 'react'
import { TweetContext } from '../../context/TweetProvider'
import { UserContext } from '../../context/UserProvider'
import './CreateTweet.css'
import '../../App.css'

export const CreateTweet = () => {

  const { tweets, fetchData, handleTweetCreate } = useContext(TweetContext)
  const { userID } = useContext(UserContext)

  const [msgError, setMsgError] = useState(false)
  const [msgErrorMessage, setMsgErrorMessage] = useState("")

  const [tweet, setTweet] = useState({
    content: "",
    date: "",
    userName: "",
  })

  useEffect(() => {
    fetchData() // Comment this out if Firebase is getting abused.
    setTweet((prevProps) => ({
      ...prevProps,
      userName: userID
    }));
  }, [tweets]);

  function handleContentChange (e) {
    setTweet((prevProps) => ({
      ...prevProps,
      content: e.target.value,
      date: new Date().toISOString(),
    }))
  }

  function handleSubmit (e) {
    e.preventDefault()
    if (tweet.content.length < 140) {
      handleTweetCreate(tweet)
      setTweet({
        content: "",
        userName: "",
        date: "",
      })
    } else {
      // alert("Too many characters")
      setMsgError(true)
      setMsgErrorMessage("Too many characters!")
    }
  }

  return (
    <div id="create-tweet">
      <div id="form-wrapper">
        <form onSubmit={handleSubmit}>
          <textarea
            id="tweet-content"
            type="text"
            name="tweet-content"
            value={tweet.content}
            onChange={handleContentChange}
            placeholder="What is happening!?"
            rows={5}
            required
          />
          <button
            id="tweet-button"
          >Tweet</button>
        </form>
        {msgError ? (
        <div className="auth-error" style={{display: 'inline'}}>
          {msgErrorMessage}
        </div>
        ) : ("")}
      </div>
    </div>
  )
}
