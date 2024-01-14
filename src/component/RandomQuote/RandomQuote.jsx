import React, { useEffect, useState } from 'react'
import "./RandomQuote.css"
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
const RandomQuote = () => {
const [quote, setQuote] = useState('')
const [author, setAuthor] = useState('')



  useEffect(() => {
    generateNewTweet()
  }
    , [])

  let generateNewTweet = () => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then((quote) => {
        setAuthor(quote.author);
        setQuote(quote.content);
      })
  }

  return (
    <div className='App'>
      <div className='Quote'>
        <FaQuoteLeft className='iconLeft' />
        <h2>{quote}</h2>
        <FaQuoteRight className='iconRight' />
        <small>-{author}-</small>
      </div>
      <br />
      <button className='btn' onClick={generateNewTweet}> Generate New Quote </button>
    </div>
  )
}

export default RandomQuote
