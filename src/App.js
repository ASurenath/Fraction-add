import { useState } from "react";
import "./App.css";
import Fraction from "./Components/Fraction";
import { Button } from "react-bootstrap";
import Frame1 from "./Frames/Frame1";
import useTypewriter from "./Hooks/useTypewritter";
import Frame3 from "./Frames/Frame3";
import Frame2 from "./Frames/Frame2";

function App() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [denom1, setDenom1] = useState(2);
  const [denom2, setDenom2] = useState(3);
  const [frameNo, setFrameNo] = useState(0);
  const [valueEntered, setValueEntered] = useState(false);
  const handleSetValue = (value, setValue) => {
    if (value == 0) {
      setValue(1);
    } else {
      setValue(Math.floor(value));
    }
  };
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
          <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column">
              <input
                type="number"
                className=" form-control small-input text-center fs-1"
                min={1}
                value={num1}
                onChange={(e) => handleSetValue(e.target.value, setNum1)}
                placeholder="0"
              />
              <hr className="border border-3 border-black opacity-100 mx-2" />
              <input
                type="number"
                className=" form-control small-input text-center fs-1"
                min={1}
                value={denom1}
                onChange={(e) => handleSetValue(e.target.value, setDenom1)}
                placeholder="1"
              />
            </div>
            <h1>+</h1>
            <div className="d-flex flex-column ">
              <input
                type="number"
                className=" form-control small-input text-center fs-1"
                min={1}
                value={num2}
                onChange={(e) => handleSetValue(e.target.value, setNum2)}
                placeholder="0"
              />
              <hr className="border border-3 border-black opacity-100 mx-2" />
              <input
                type="number"
                className=" form-control small-input text-center fs-1"
                min={1}
                value={denom2}
                onChange={(e) => handleSetValue(e.target.value, setDenom2)}
                placeholder="1"
              />
            </div>
            <Button
              className="mx-3"
              onClick={() => {
                setValueEntered(true);
                setFrameNo(1);
              }}
            >
              <h1 className="px-3">=</h1>
            </Button>
          </div>
        )}

        {frameNo == 1 && (
          <Frame1
            num1={num1}
            denom1={denom1}
            num2={num2}
            denom2={denom2}
            lcm={lcm(denom1, denom2)}
            setFrameNo={setFrameNo}
          />
        )}
        {frameNo == 2 && (
          <Frame2
            num1={num1}
            denom1={denom1}
            num2={num2}
            denom2={denom2}
            lcm={lcm(denom1, denom2)}
            setFrameNo={setFrameNo}
          />
        )}
        {frameNo == 3 && (
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
    </div>
  );
}

export default App;
