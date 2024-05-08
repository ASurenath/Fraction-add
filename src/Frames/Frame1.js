import React, { useEffect, useState } from "react";
import Fraction from "../Components/Fraction";
import useTypewriter from "../Hooks/useTypewritter";
import { Button } from "react-bootstrap";

function Frame1({ num1, denom1, num2, denom2, lcm, setFrameNo }) {
  const [step, setStep] = useState(0);
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

  const textA = [
    `We can represent fractions as shaded sections, where the whole is dvided into equal parts,`,
    `as many as the denominator. And we shade as many sections as the numerator`,
    `Both ${num1}/${denom1} and ${num2}/${denom2} have different denominators.`,
    ` We need to find the common denominator to add them.`,
    `The smallest possible common denominator is the least common multiple(LCM) of both denominators.`,
  ];
  const textB = [
    `We can represent fractions as shaded sections, where the whole is dvided into equal parts,`,
    `as many as the denominator. And we shade as many sections as the numerator`,
    `Both ${num1}/${denom1} and ${num2}/${denom2} have the same denominator. `,
    `So we can easily add them.`,
  ];
  // const renderButtons = () => {
  //   return (
  //     <div className="d-flex w-100 justify-content-evenly appear">
  //       <Button variant="primary" onClick={denom1==denom2?()=>setFrameNo(3):() => setFrameNo(2)}>
  //       <h1><i className="fa-solid fa-angle-down mx-5"></i></h1>
  //       </Button>
  //     </div>
  //   );
  // };
  const increaseStep = () => {
    if (denom1 == denom2) {
      if (step == renderList1.length - 1 && denom1==denom2) {
        setFrameNo(3);
      }
    } else {
      if (step == renderList2.length - 1 && denom1!=denom2) {
        setFrameNo(2);
      }
    }

    setStep(step + 1);
  };
  const renderList1 = [
    <>
    <p className="appear  fs-2 text-center">{textB[0]}</p>
    <p className="appear  fs-2 text-center">{textB[1]}</p>
  </>,
    // step0
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
    </>,
    // step1

    <>
      <p className="appear  fs-2 text-center">{textB[2]}</p>
      <p className="appear  fs-2 text-center">{textB[3]}</p>
    </>,
  ];
  const renderList2 = [
    // step0
    <>
      <p className="appear  fs-2 text-center">{textA[0]}</p>
      <p className="appear  fs-2 text-center">{textA[1]}</p>
    </>,

    // step1
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
    </>,
    // step2
    <>
      <p className="appear  fs-2 text-center">{textA[2]}</p>
      <p className="appear  fs-2 text-center">{textA[3]}</p>
      <p className="appear  fs-2 text-center">{textA[4]}</p>
    </>,
  ];
  return (
    <div className="d-flex flex-column align-items-center justify-content-start frame1">
      {denom1 == denom2 ? (
        <>
          {renderList1.map(
            (i, index) =>
              step >= index && (
                <React.Fragment key={index}>
                  {renderList1[index]}
                </React.Fragment>
              )
          )}
          {step < renderList1.length && (
            <div className="text-center">
              <Button variant="primary" onClick={increaseStep}>
                <h1>
                  <i className="fa-solid fa-angle-down mx-5"></i>
                </h1>
              </Button>
            </div>
          )}
        </>
      ) : (
        <>
          {renderList2.map(
            (i, index) =>
              step >= index && (
                <React.Fragment key={index}>
                  {renderList2[index]}
                </React.Fragment>
              )
          )}
          {step < renderList2.length && (
            <div className="text-center">
              <Button variant="primary" onClick={increaseStep}>
                <h1>
                  <i className="fa-solid fa-angle-down mx-5"></i>
                </h1>
              </Button>
            </div>
          )}
        </>
      )}
    </div>
    // </div>
  );
}

export default Frame1;
