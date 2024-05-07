import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Fraction from "../Components/Fraction";

function Frame2({ num1, denom1, num2, denom2,lcm , setFrameNo}) {
    const [step, setStep] = useState(1);
    const [newNum1, setNewNum1] = useState('?');
    const [newNum2, setNewNum2] = useState('?');
    console.log(step);
    // useEffect(() => {
    //   //Implementing the setInterval method
    //   const interval = setInterval(() => {
    //     setStep(step + 1);
    //     if (step >= 20) {
    //       clearInterval(interval);
    //     }
    //   }, 500);
  
    //   //Clearing the interval
    //   return () => clearInterval(interval);
    // }, [step]);

    

    const increaseStep = () => {
        if(step==4){
            findNewNums()
        }
        if(step<20){
            setStep(step + 1);
        }

    }
    const findNewNums= () => {
        setNewNum1(num1 * (lcm / denom1));
        setNewNum2(num2 * (lcm / denom2));
    }

    const renderButtons = () => {
        return (
          <div className="d-flex justify-content-evenly w-100">
            <Button variant="primary" onClick={()=>setFrameNo(1)}>
              <h2>Back</h2>
            </Button>
            <Button variant="primary" onClick={()=>setFrameNo(0)}>
              <h2>Start Over</h2>
            </Button>
            <Button variant="primary" onClick={()=>setFrameNo(3)}>
              <h2>Next</h2>
            </Button>
          </div>
        );
      };
  return <div className="frame2" onClick={increaseStep}>
     {step >= 1 && (
            <p className="appear  fs-2 text-left">{`LCM of ${denom1} and ${denom2} is ${lcm}.`}</p>
          )}
          {step >= 1 && (
            <p className="appear  fs-2 text-left">{`${num1}/${denom1} + ${num2}/${denom2} =${newNum1}/${lcm} + ${newNum2}/${lcm}.`}</p>
          )}
          {step >= 1 && (
            <p className="appear  fs-2 text-left">{`Now, we need to find the numerators.`}</p>
          )}
          {step >= 2 && (
            <div className="outer-grid appear mb-3">
            <div>
              <h1>
                {num1}/{denom1}
              </h1>
            </div>
            <Fraction num={num1} denom={denom1} color={"blue"} />
          </div>
          )}
          {step >= 2 && (
              <h1 className="text-center appear">
              <i className="fa-solid fa-arrow-down"></i>
              </h1>
          )}
          {step >= 2 && (
            <div className="outer-grid appear mb-3">
            <div>
              <h1>
                {newNum1}/{lcm}
              </h1>
            </div>
            <Fraction className="appear" num={num1} denom={denom1} split={lcm/denom1} color={"blue"} />
          </div>
          )}
          {step >= 3 && (
              <h1 className="text-center appear">
              and
              </h1>
          )}
          {step >= 3 && (
            <div className="outer-grid appear mb-3">
            <div>
              <h1>
                {num2}/{denom2}
              </h1>
            </div>
            <Fraction num={num2} denom={denom2} color={"yellow"} />
          </div>
          )}
          {step >= 3 && (
              <h1 className="text-center appear">
              <i className="fa-solid fa-arrow-down"></i>
              </h1>
          )}
{step >= 3 && (
            <div className="outer-grid appear mb-3">
            <div>
              <h1>
                {newNum2}/{lcm}
              </h1>
            </div>
            <Fraction className="appear" num={num2} denom={denom2} split={lcm/denom2 } color={"yellow"} />
          </div>
          )}
{step >= 4 && (
            <p className="appear  fs-2 text-left">Count the shaded sections to find the numerators</p>
          )}
                      
{step<6 && (
    <div className="text-center">
        <Button variant="primary" onClick={increaseStep}>
            <h1><i className="fa-solid fa-angle-down mx-5"></i></h1>
        </Button>
    </div>
)}

          {step >= 6 && renderButtons()}
  </div>;
}

export default Frame2;
