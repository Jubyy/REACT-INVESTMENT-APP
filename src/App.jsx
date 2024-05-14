import { useState } from 'react';
import Header from "./components/Header.jsx"
import InputUI from "./components/InputUI.jsx"
import "./index.css"
import ResultTable from './components/resultTable.jsx';



function App() {
  const [inputValue, setInputValue] = useState({initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });
    
  function handleOnChange(event, text){
      setInputValue( (prevValue) => { 
          return {...prevValue, [text]: parseInt(event.target.value)}
      } );
  }




  let valueParamters = inputValue;
  return (
    <>
    <Header />
    <InputUI myClass="input-group" myFunction={handleOnChange} inputValue={inputValue} />
    <ResultTable parameters={valueParamters} />
    </>
    


  )
}

export default App
