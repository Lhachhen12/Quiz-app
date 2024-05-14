import React from 'react'
import './Quiz.css'

const Quiz = () => {
  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>1. which device is required for the internet connnection?
        </h2>
        <ul>
            <li>Router</li>
            <li>Modem</li>
            <li>LAN Cable</li>
            <li>Pen Drive</li>
        </ul>
        <button>Next</button>
        <div className='index'> 1 of 5 questions</div>
    </div>
  )
}

export default Quiz