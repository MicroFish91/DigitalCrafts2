import React from 'react';

const Increment = ({ increment }) => {
  const handleClick = (e) => {
    increment();
  }

  return (
    <>
      <button onClick={handleClick}>Increment</button>
    </>
  )
}

export default Increment
