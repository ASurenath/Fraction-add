import React, { useEffect, useState } from "react";
import Fraction from "../Components/Fraction";
import useTypewriter from "../Hooks/useTypewritter";
import { Button } from "react-bootstrap";

function Frame1({ num1, denom1, num2, denom2, lcm, setFrameNo }) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setStep(step + 1);
      if (step >= 20) {
        clearInterval(interval);
      }
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [step]);

  const textA = [
    `Both ${num1}/${denom1} and ${num2}/${denom2} have different denominators.`,
    ` We need to find the common denominator.`,
    ` For that, we need to find the least common multiple(LCM) of both denominators.`,
  ];
  const textB = [
    `Both ${num1}/${denom1} and ${num2}/${denom2} have the same denominator. `,
    `So we can easily add them.`,
  ];
  const renderButtons = () => {
    return (
      <div className="d-flex w-100 justify-content-evenly appear">
        <Button variant="primary" onClick={()=>setFrameNo(0)}>
          <h2>Start Over</h2>
        </Button>
        <Button variant="primary" onClick={denom1==denom2?()=>setFrameNo(3):() => setFrameNo(2)}>
          <h2>Next</h2>
        </Button>
      </div>
    );
  };
  return (
    <div className="w-100 d-flex flex-column align-items-center justify-content-start">
      {step >= 0 && (
        <>
          <div className="outer-grid appear">
            <div>
              <h1>
                {num1}/{denom1}
              </h1>
            </div>
            <Fraction num={num1} denom={denom1} color={"blue"} />
          </div>
          <h1 className="appear">+</h1>
          <div className="outer-grid appear mb-3">
            <div>
              <h1>
                {num2}/{denom2}
              </h1>
            </div>
            <Fraction num={num2} denom={denom2} color={"yellow"} />
          </div>
        </>
      )}

      {denom1 == denom2 ? (
        <>
          {step >= 1 && (
            <p className="appear  fs-2 text-left">{textB[0]}</p>
          )}
          {step >= 2 && (
            <p className="appear  fs-2 text-left">{textB[1]}</p>
          )}
          {step >= 3 && renderButtons()}
        </>
      ) : (
        <>
          {step >= 1 && (
            <p className="appear  fs-2 text-left">{textA[0]}</p>
          )}
          {step >= 2 && (
            <p className="appear  fs-2 text-left">{textA[1]}</p>
          )}
          {step >= 3 && (
            <p className="appear  fs-2 text-left">{textA[2]}</p>
          )}
          {step >= 4 && renderButtons()}
        </>
      )}
    </div>
    // </div>
  );
}

export default Frame1;
