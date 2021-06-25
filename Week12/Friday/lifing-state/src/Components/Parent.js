import React, { useState } from 'react';
import DisplayInfo from './DisplayInfo';
import Increment from './Increment';

const Parent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <>
      <DisplayInfo count={count} /> <br />
      <Increment increment={incrementCount} />
    </>
  )
}

export default Parent
