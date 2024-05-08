import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Fraction from "../Components/Fraction";
import FractionSum from "../Components/FractionSum";

function Frame3({ num1, denom1, num2, denom2, lcm, setFrameNo }) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [step]);
  // useEffect(() => {
  //   //Implementing the setInterval method
  //   const interval = setInterval(() => {
  //     setStep(step + 1);
  //     if (step >= 20) {
  //       clearInterval(interval);
  //     }
  //   }, 1000);

  //   //Clearing the interval
  //   return () => clearInterval(interval);
  // }, [step]);
  const increaseStep = () => {
    setStep(step + 1);
  };
  const renderButtons = () => {
    return (
      <div className="d-flex w-100 justify-content-evenly appear">
        <Button variant="primary" onClick={() => setFrameNo(0)}>
          <h2>Back</h2>
        </Button>
      </div>
    );
  };
  const renderList = [
    //// step0
    <>
      <div className="outer-grid appear mb-3">
        <div>
          <h1>
            {(num1 * lcm) / denom1}/{lcm}
          </h1>
        </div>
        <Fraction
          className="appear"
          num={num1}
          denom={denom1}
          split={lcm == denom1 ? null : lcm / denom1}
          color={"blue"}
        />
      </div>
      <h1 className="text-center">+</h1>
      <div className="outer-grid appear mb-3">
        <div>
          <h1>
            {(num2 * lcm) / denom2}/{lcm}
          </h1>
        </div>
        <Fraction
          className="appear"
          num={num2}
          denom={denom2}
          split={lcm == denom2 ? null : lcm / denom2}
          color={"yellow"}
        />
      </div>
    </>,
    //// step1
    <>
      <h1 className="text-center">=</h1>

      <div className="outer-grid appear mb-3">
        <div>
          <h1>
          {(num1 * lcm) / denom1 + (num2 * lcm) / denom2}/{lcm}
          </h1>
        </div>

        <FractionSum
          className="appear"
          num1={(num1 * lcm) / denom1}
          num2={(num2 * lcm) / denom2}
          denom={lcm}
          color1={"blue"}
          color2={"yellow"}
        />
      </div>
    </>,
    //// step2

    <p className="appear fs-2 text-center">
      Answer:
      {num1}/{denom1}+{num2}/{denom2}
      {denom1 != denom2 &&
        `=${(num1 * lcm) / denom1}/${lcm}+${(num2 * lcm) / denom2}/${lcm}`}
      =
      <span className="fw-bold fs-1">
        {(num1 * lcm) / denom1 + (num2 * lcm) / denom2}/{lcm}
      </span>
    </p>,
  ];

  return (
    <div className="frame3">
      {renderList.map((i, index) => (
        step>=index&&<React.Fragment key={index}>{renderList[index]}</React.Fragment>
      ))}
      {step < renderList.length && (
        <div className="text-center">
          <Button variant="primary" onClick={increaseStep}>
            <h1>
              <i className="fa-solid fa-angle-down mx-5"></i>
            </h1>
          </Button>
        </div>
      )}
      {step >= renderList.length && renderButtons()}
    </div>
  );
}

export default Frame3;
