import { useState } from 'react';
import './App.css';

export const CHANGE_TO = 'Change to ';
export const PURPLE = 'MediumVioletRed';
export const MIDNIGHT = 'MidnightBlue';
export const GREY = 'grey';

export const replaceCamelCaseWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g,' $1');
}

function App() {

  const [buttonColor, setButtonColor] = useState(PURPLE);
  const [disabled,setDisabled] = useState(false);
  const newButtonColor = buttonColor === PURPLE ? MIDNIGHT : PURPLE;
 
  return (
    <div className="App">
      <button style={{backgroundColor: disabled ? GREY : buttonColor}} onClick={()=> setButtonColor(newButtonColor)} disabled={disabled}>{CHANGE_TO}{replaceCamelCaseWithSpaces(newButtonColor)}</button>
      <input type={"checkbox"} defaultChecked={disabled} aria-labelledby="enable-button-checkbox" aria-checked={disabled} onClick={(e)=> setDisabled(e.target.checked)}/>
      <label id="enable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
