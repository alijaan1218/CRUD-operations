//import { useState } from "react";
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
import Index from "./components/Index";

function App() {

  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-screen h-screen">
        <Index a={3} b={6}/>
      </div>

    </>
  )





  // return (
  //     <Header name="Ali Jaan"/>
  // )
  // const [sliderValue, setSliderValue] = useState(0);
  //   const constantValue = 10; // Constant value that can't be changed

  //   const handleSliderChange = (event) => {
  //     const newValue = parseInt(event.target.value);
  //     setSliderValue(newValue);
  //   };

  //   return (
  //     <div>
  //       <p>Constant Value: {constantValue}</p>
  //       <input type="range" min="0" max="100" value={sliderValue} onChange={handleSliderChange} />
  //       <p>Value from Slider: {sliderValue}</p>
  //       <p>Total: {constantValue + sliderValue}</p>
  //     </div>
  //   );




  // const [isOn, setIsOn] = useState(false);

  // const toggleSwitch = () => {
  //   setIsOn(!isOn);
  // };

  // return (
  //   <div>
  //     <button onClick={toggleSwitch}>{isOn ? 'On' : 'Off'}</button>
  //   </div>
  // );


  // const [name, setName] = useState('');
  // const [error, setError] = useState('');

  // const handleInputChange = (event) => {
  //   const inputValue = event.target.value;
  //   setName(inputValue);
  //   if (inputValue.length < 3) {
  //     setError('Name must be at least 3 characters long.');
  //   } else {
  //     setError('');
  //   }
  // };

  // return (
  //   <div>
  //     <input type="text" value={name} onChange={handleInputChange} />
  //     {error && <p style={{ color: 'red' }}>{error}</p>}
  //   </div>
  // );



  // const [items, setItems] = useState([]);
  //   const [inputValue, setInputValue] = useState('');

  //   const addItem = () => {
  //     if (inputValue.trim() !== '') {
  //       setItems([...items, inputValue]);
  //       setInputValue('');
  //     }
  //   };

  //   const removeItem = (index) => {
  //     const newItems = [...items];
  //     newItems.splice(index, 1);
  //     setItems(newItems);
  //   };

  //   return (
  //     <div>
  //       <input
  //         type="text"
  //         value={inputValue}
  //         onChange={(e) => setInputValue(e.target.value)}
  //         placeholder="Enter item"
  //       />
  //       <button onClick={addItem}>Add</button>
  //       <ul>
  //         {items.map((item, index) => (
  //           <li key={index}>
  //             {item}
  //             <button onClick={() => removeItem(index)}>Remove</button>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
}

export default App;