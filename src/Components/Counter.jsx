import React, { useEffect, useRef, useState } from 'react'
import "../styles/Counter.css"

const Counter = ({count,object}) => {
  const [counter, setcounter] = useState(0)
  const counterRef = useRef(null)

  useEffect(() => {
    counterRef.current = setInterval(() => {
      setcounter((prevCount) => {
        if (prevCount < count) {
          return prevCount + 1;
        } else {
          clearInterval(counterRef.current);
          counterRef.current = null;
          return count; // Set the counter to the count value
        }
      });
    }, 5);

    // Cleanup function to clear the interval when the component unmounts or count changes
    return () => {
      if (counterRef.current) {
        clearInterval(counterRef.current);
      }
    };
  }, [count]);

  return (
    <div className='counter-box'>
        <div className='count'>
            {counter}+
        </div>
        <div className='object'>
            {object}
        </div>
    </div>
  )
}

export default Counter
