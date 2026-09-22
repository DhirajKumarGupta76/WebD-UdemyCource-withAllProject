import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('hello');
  }
  return (
    <div>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App

// function App() {
//   const handleChange = (event) => {
//     console.log(event.target.value);
//   };

//   return (
//     <input
//       type="text"
//       onChange={handleChange}
//     />
//   );
// }