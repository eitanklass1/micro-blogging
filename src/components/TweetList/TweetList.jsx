import React from 'react'
import { Tweet } from '../Tweet/Tweet'
import { useContext } from 'react'
import { TweetContext } from '../../context/TweetProvider'

export const TweetList = () => {

  const { tweets } = useContext(TweetContext)

  return (
    <div>
      {tweets.map((tweet) => {
        return <Tweet tweet={tweet} />
      })}
    </div>
  )
}
