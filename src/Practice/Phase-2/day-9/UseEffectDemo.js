import React, { useEffect, useState } from 'react'

function UseEffectDemo () {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component Rendered or Updated!')
    })
  
    return (
        <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
      </div>
  )
}

export default UseEffectDemo