import React from 'react'
import { 
  useContext
} from 'react';
import { CreateTweet } from '../CreateTweet/CreateTweet';
import { TweetList } from '../TweetList/TweetList';
import { BounceLoader } from 'react-spinners';
import { TweetContext } from '../../context/TweetProvider';
import './HomePage.css'

export const HomePage = () => {

  const { loading } = useContext(TweetContext)

  return (
    <div>
      <CreateTweet />
      {loading ? (
        <div id="tweet-list-loader">
          <BounceLoader color="#36d7b7" />
        </div>
      ) : <TweetList /> }
    </div>
  )
}
