import { useEffect, useState } from "react";
import "./App.css";
import Fraction from "./Components/Fraction";
import { Button } from "react-bootstrap";
import Frame1 from "./Frames/Frame1";
import useTypewriter from "./Hooks/useTypewritter";
import Frame3 from "./Frames/Frame3";
import Frame2 from "./Frames/Frame2";
import { InputNumber } from "primereact/inputnumber";

function App() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [denom1, setDenom1] = useState(2);
  const [denom2, setDenom2] = useState(3);
  const [frameNo, setFrameNo] = useState(0);
  const [valueEntered, setValueEntered] = useState(false);
  const [err1, setErr1] = useState(false);
 
  // const input1=document.getElementById("input-1")
  // input1.onchange=(e)=>handleSetError(e.target.value, setErr1);

  // useEffect(() => {
  //   document.getElementById("input-1").onchange=(e)=>handleSetError(e.target.value);
  //   document.getElementById("input-2").onchange=(e)=>handleSetError(e.target.value);
  //   document.getElementById("input-3").onchange=(e)=>handleSetError(e.target.value);
  //   document.getElementById("input-4").onchange=(e)=>handleSetError(e.target.value);
    
  //   }, [])
  const handleSetValue = (value, setValue) => {
    console.log("value", value);
    if (value <= 0 || value > 99) {
      // setValue(1);
    } else {
      setValue(Math.floor(value));
    }
  };
  // const handleSetError=(value)=>{
  //   console.log("value", value);

  //   if (value <= 0 || value > 99) {
  //     setErr1(true);
  //   } else {
  //     setErr1(false);
  //   }
  // }
  
  function gcd(a, b) {
    for (let temp = b; b !== 0; ) {
      b = a % b;
      a = temp;
      temp = b;
    }
    return a;
  }
  function lcm(a, b) {
    const gcdValue = gcd(a, b);
    console.log("gcdValue", gcdValue);
    console.log("a * b / gcdValue", (a * b) / gcdValue);
    return (a * b) / gcdValue;
  }

  return (
    <div className="App">
      <h1 className="text-center py-3 ">Addition of fractions</h1>

      <div className="main d-flex flex-column justify-content-start align-items-center">
        {frameNo == 0 && (
          <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="d-flex flex-column">
              <InputNumber
                className="small-input text-center fs-1"
                min={1}
                max={99}
                value={num1}
                onValueChange={(e) => handleSetValue(e.target.value, setNum1)}
                showButtons
                inputId="input-1"
              />
              <hr className="border border-3 border-dark opacity-100 mx-2" />
              <InputNumber
                className=" small-input text-center fs-1"
                min={1}
                max={99}
                value={denom1}
                onValueChange={(e) => handleSetValue(e.target.value, setDenom1)}
                showButtons
                id="input-2"
              />
            </div>
            <h1 className="mx-5" ><i className="fa-solid fa-plus fa-2xl"/></h1>
            <div className="d-flex flex-column me-5">
              <InputNumber
                className=" small-input text-center fs-1"
                min={1}
                max={99}
                value={num2}
                onValueChange={(e) => handleSetValue(e.target.value, setNum2)}
                showButtons
                id="input-3"
              />
              <hr className="border border-3 border-dark opacity-100 mx-2" />
              <InputNumber
                className=" small-input text-center fs-1 "
                min={1}
                max={99}
                value={denom2}
                onValueChange={(e) => handleSetValue(e.target.value, setDenom2)}
                showButtons
                id="input-4"
              />
            </div>
            <Button
              className="mx-5"
              onClick={() => {
                setValueEntered(true);
                setFrameNo(1);
              }}
            >
              <h1 className="px-3">=</h1>
            </Button>
          </div>
        )}

        {frameNo >= 1 && (
          <Frame1
            num1={num1}
            denom1={denom1}
            num2={num2}
            denom2={denom2}
            lcm={lcm(denom1, denom2)}
            setFrameNo={setFrameNo}
          />
        )}
        {frameNo >= 2 && denom1 != denom2 && (
          <Frame2
            num1={num1}
            denom1={denom1}
            num2={num2}
            denom2={denom2}
            lcm={lcm(denom1, denom2)}
            setFrameNo={setFrameNo}
          />
        )}
        {frameNo >= 3 && (
          <Frame3
            num1={num1}
            denom1={denom1}
            num2={num2}
            denom2={denom2}
            lcm={lcm(denom1, denom2)}
            setFrameNo={setFrameNo}
          />
        )}
      </div>
      {err1&&<div className="text-danger text-center fs-6">Please enter numerators and denominators between 1 and 99</div>}
    </div>
  );
}

export default App;
