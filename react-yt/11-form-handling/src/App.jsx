import React from 'react'

const App = () => {
//handle to refresh on submit of form 
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted');
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App