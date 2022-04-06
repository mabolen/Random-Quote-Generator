import { useState, useEffect } from "react"
import React from 'react'

const QuoteBox = () => {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const getQuote = () => {
        fetch('https://api.quotable.io/random')
            .then((res) => res.json())
            .then((data) => {
                setQuote(data.content)
                setAuthor(data.author)
            })
    }

    useEffect(getQuote, [])

  return (
    <div id='quote-box'>
        <div id='text'>{quote}</div>
        <div id='author'>{author}</div>
        <button id='new-quote' onClick={getQuote}>New Quote</button>
        <a href='https://www.twitter.com/intent/tweet' target='_blank' id='tweet-quote'>Tweet Quote</a>
    </div>
  )
}

export default QuoteBox