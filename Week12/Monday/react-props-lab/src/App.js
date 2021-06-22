import React from 'react';
import {
  Link
} from 'react-router-dom'


const App = () => {
  return (
    <>
    <div style={{color:"black", fontSize: "24px"}}>
      <Link to="/address">Address</Link> <br />
      <Link to="/envelope">Envelope</Link>
      <Link to="/credit">Credit Card</Link>

    </div>
      
    </>
  )
}

export default App

