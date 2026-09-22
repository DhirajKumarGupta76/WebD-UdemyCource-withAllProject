import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging() {
    console.log('A ki value change ho gyi');
  }

  function bChanging() {
    console.log('B ki value change ho gyi');
  }

//when change in a ,then achanging is call;
  useEffect(function(){
    aChanging()
  },[a])
  
  useEffect(function(){
    bChanging()
  },[b])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
        onClick={() => {
          setA(a + 1)
        }}
      >Change A</button>
      <button
        onClick={() => {
          setB(b - 1)
        }}
      >Change B</button>
    </div>
  )
}

export default App



// ⚛️ useEffect in React

// useEffect is a React Hook used to perform side effects in a component.

// A side effect is something that happens outside the normal UI rendering, such as:

// Fetching data from an API
// Calling an external API
// Updating the document title
// Setting timers
// Adding event listeners
// Running code when a component loads or when data changes



// import { useEffect } from "react";

// useEffect(() => {
//   // side-effect code
// }, []);