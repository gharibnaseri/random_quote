import React , {useEffect, useState} from 'react'
import "./RandomQuote.css"
const RandomQuote = () => {
    const [quote, setQuote]=useState('Hello')
    const [author, setAuthor]=useState('Author')

    // http://api.quotable.io/random

    useEffect(()=>
    {
        fetch("http://api.quotable.io/random")
        .then(res=> res.json())
        .then((quote)=> {
            setAuthor(quote.author);
            setQuote(quote.content);
    })
    }
    ,[])

    let generateNewTweet= ()=>{
        fetch("http://api.quotable.io/random")
        .then(res=> res.json())
        .then((quote)=> {
            setAuthor(quote.author);
            setQuote(quote.content);
    })
    }

  return (
    <div className='App'>
      <div className='Quote'>
        <h2>{quote}</h2>
        <small>-{author}-</small>
      </div>
      <br/>
      <button className='btn' onClick={generateNewTweet}>Generate New Quote</button>
    </div>
  )
}

export default RandomQuote
