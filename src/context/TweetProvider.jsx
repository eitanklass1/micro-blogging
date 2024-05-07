import React from 'react'
import { 
  createContext,
  useState,
} from 'react'
import { 
  addDoc,
  getDocs,
  collection,
} from 'firebase/firestore';
import { db } from '../firebase.js'

export const TweetContext = createContext();

export const TweetProvider = ({ children }) => {

  const [tweets, setTweets] = useState([])
  const [loading, setLoading] = useState(true)

  const tweetCollection = collection(db, "tweets")

  async function fetchData() {
    try {
      let tweetsFromDb = []
      const querySnapshot = await getDocs(tweetCollection);
      querySnapshot.forEach((doc) => {
        const tweetWithID = {
          ...doc.data(),
          id: doc.id,
        }
        tweetsFromDb.push(tweetWithID)
      });
      setTweets(tweetsFromDb)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  const handleTweetCreate = async (tweet) => {
    try {
      setLoading(true);
      const docRef = await addDoc(tweetCollection, tweet)
      tweet.docID = docRef.id
      setTweets([tweet, ...tweets])
      console.log("Success!")
    } catch (error) {
      console.log(error)
      alert("Your tweet wasn't posted!")
    }
  }

  return <TweetContext.Provider value={{ 
    loading: loading,
    tweets: tweets,
    fetchData: fetchData,
    handleTweetCreate: handleTweetCreate,
  }}>{children}</TweetContext.Provider>
}

  
