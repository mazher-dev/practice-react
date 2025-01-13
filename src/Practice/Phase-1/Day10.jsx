// Practice Program: Focus Management with Forwarded Refs
// Goal: Create a Parent component that can trigger focus on an 
// Input component using a button. You'll use refs and forwardRef to pass the reference down to the child.


import React, { useRef } from 'react'

// Child component that forwards the ref to the input element
const Input = React.forwardRef((props, ref) => {
    return (
      <div>
        <input ref={ref} {...props} />
      </div>
    );
  });
  
  const Day10 = () => {
    const inputRef = useRef(null); // Ref to manage the input field
  
    // Function to focus on the input field
    const focusInput = () => {
      inputRef.current.focus();
    };
  
    return (
      <div>
        <h2>Focus Management with Refs</h2>
        <Input ref={inputRef} type="text" placeholder="Click the button to focus" />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    );
  };
  
  export default Day10;
